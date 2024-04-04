import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "userStore",
  () => {
    const init_userData = () => {
      return {
        email: "",
        password: "",
      };
    };

    const user = ref(init_userData());

    return {
      user,
      init_userData,
    };
  },
  { persist: { key: "user", storage: localStorage } },
);

export default useUserStore;
