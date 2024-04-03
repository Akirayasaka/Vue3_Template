import { ref } from "vue";
import { defineStore } from "pinia";

export const useWebSocketStore = defineStore(
  "websocketStore",
  () => {
    const wsResult = ref({});

    const fetch = (data: object): void => {
      wsResult.value = data;
    };

    return {
      wsResult,
      fetch,
    };
  },
  { persist: { key: "websocket", storage: sessionStorage } }
);

export default useWebSocketStore;
