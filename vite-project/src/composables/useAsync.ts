import { ref, type Ref } from 'vue';

// 定義回傳值的型別介面
interface UseAsyncReturn<T> {
  data: Ref<T | null>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
  // execute 是一個用來觸發 API 呼叫的函式
  execute: (...args: any[]) => Promise<void>; 
}

/**
 * 封裝非同步請求與狀態管理的 Composable(範例用, 實際可用VueUse提供的 useAsyncState更簡便)
 * @param asyncFunction 傳入一個回傳 Promise 的 API 請求函式
 */
export function useAsync<T>(asyncFunction: (...args: any[]) => Promise<T>): UseAsyncReturn<T> {
    // 1. 定義狀態：資料、載入中、錯誤
    const data = ref<T | null>(null) as Ref<T | null>;
    const isLoading = ref<boolean>(false);
    const error = ref<Error | null>(null);

    // 2. 定義執行函式
    const execute = async (...args: any[]) => {
        isLoading.value = true;
        error.value = null; // 每次執行前清空錯誤狀態

        try {
            // 等待外部傳入的 API 函式執行完畢，並將結果存入 data
            const response = await asyncFunction(...args);
            data.value = response;
        } catch (err) {
            // 捕捉錯誤並存入 error 狀態
            error.value = err instanceof Error ? err : new Error(String(err));
        } finally {
            // 不管成功或失敗，最後都將載入狀態設為 false
            isLoading.value = false;
        }
    };

    // 3. 回傳狀態與執行函式給 Component 使用
    return { data, isLoading, error, execute };
};
