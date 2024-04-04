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

    const reset_UserStore = (): void => {
      user.value = init_userData();
    };

    return {
      user,
      reset_UserStore,
    };
  },
  { persist: { key: "user", storage: localStorage } },
);

export default useUserStore;
