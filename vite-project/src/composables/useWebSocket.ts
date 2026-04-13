// composables/useWebSocket.ts
import { ref, onScopeDispose, getCurrentScope } from "vue";

interface UseWebSocketOptions {
  url: string;
  onMessage?: (data: any) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onError?: (error: Event) => void;
  reconnectDelay?: number;
  maxReconnectAttempts?: number;
}

export function useWebSocket(options: UseWebSocketOptions) {
  const {
    url,
    onMessage,
    onOpen,
    onClose,
    onError,
    reconnectDelay = 1000,
    maxReconnectAttempts = 5,
  } = options;

  const isConnected = ref(false);
  const isConnecting = ref(false);
  const error = ref<Event | null>(null);

  let ws: WebSocket | null = null;
  let reconnectAttempts = 0;
  let reconnectTimer: number | null = null;
  
  // 新增：紀錄是否為「人為手動關閉」
  let isIntentionallyClosed = false; 

  function connect() {
    // 阻擋重複連線：如果已經在連線中，或是已經連線成功，則不再重複建立
    if (ws && (ws.readyState === WebSocket.CONNECTING || ws.readyState === WebSocket.OPEN)) {
      return;
    }

    isConnecting.value = true;
    error.value = null; // 重置先前的錯誤狀態
    isIntentionallyClosed = false; // 每次連線時重置手動關閉標記

    ws = new WebSocket(url);

    ws.onopen = () => {
      isConnected.value = true;
      isConnecting.value = false;
      reconnectAttempts = 0; // 連線成功後，重置重連次數
      onOpen?.();
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        onMessage?.(data);
      } catch {
        onMessage?.(event.data);
      }
    };

    ws.onclose = () => {
      isConnected.value = false;
      isConnecting.value = false;
      onClose?.();

      // 修正點：只有在「非手動關閉」且「未達最大重連次數」時，才進行自動重連
      if (!isIntentionallyClosed && reconnectAttempts < maxReconnectAttempts) {
        reconnectAttempts++;
        reconnectTimer = window.setTimeout(
          connect,
          reconnectDelay * reconnectAttempts // 這裡保留了您的線性退避演算法
        );
      }
    };

    ws.onerror = (e) => {
      error.value = e;
      onError?.(e);
    };
  }

  function disconnect() {
    isIntentionallyClosed = true; // 標記為手動關閉，阻止 onclose 觸發自動重連
    
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
      reconnectTimer = null;
    }
    
    if (ws) {
      ws.close(); // 這裡會觸發 onclose 事件
      ws = null;
    }
  }

  function send(data: any) {
    if (ws && isConnected.value) {
      // 確保發送字串
      const message = typeof data === 'string' ? data : JSON.stringify(data);
      ws.send(message);
    } else {
      console.warn('WebSocket is not connected. Message not sent.');
    }
  }

  // 修正點：使用 onScopeDispose 取代 onUnmounted
  // 這樣即使在 Pinia Store 內使用，當 Store 被銷毀時也能正確斷開連線
  if (getCurrentScope()) {
    onScopeDispose(() => {
      disconnect();
    });
  }

  return {
    isConnected,
    isConnecting,
    error,
    connect,
    disconnect,
    send,
  };
}