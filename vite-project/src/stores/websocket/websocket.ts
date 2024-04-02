import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useWebSocketStore = defineStore('websocket', () => {
  const wsResult = ref({});

  const fetch = (data: object): void => {
    wsResult.value = data;
  };

  return {
    wsResult,
    fetch,
  };
});

export default useWebSocketStore;
