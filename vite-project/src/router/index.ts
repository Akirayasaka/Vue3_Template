import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";
import { store } from "@/stores";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/** 監聽頁面轉跳行為(Router Guard) */
router.beforeEach(async (to, from) => {
  console.log("to", to);
  console.log("from", from);

  const userData = JSON.parse(localStorage.getItem("user")!);

  if (userData === null) {
    if (to.fullPath === "/login") {
      return;
    }
    return "/login";
  } else {
    if (store.userStore().user.email === "") {
      localStorage.removeItem("user");
      return "/login";
    } else {
      if (to.fullPath === "/login") {
        return "/";
    }
      return;
    }
  }
});

export default router;
