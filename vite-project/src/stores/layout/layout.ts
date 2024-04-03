import { ref } from "vue";
import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layoutStore", () => {
  const drawer = ref(false);

  const changeDrawer = () => {
    drawer.value = !drawer.value;
  };

  return {
    drawer,
    changeDrawer,
  };
});

export default useLayoutStore;
