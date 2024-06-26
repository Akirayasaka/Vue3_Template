import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/layouts/default/DefaultLayout.vue"),
    name: "Home",
    meta: { title: "首頁" },
    children: [
      {
        path: "",
        component: () => import("@/components/HelloWorld.vue"),
        name: "HelloWorld",
        meta: { title: "測試頁面" },
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
    name: "LoginPage",
    meta: { title: "登入" },
  },
  {
    path: "/error",
    component: () => import("@/views/ErrorPage.vue"),
    name: "ErrorPage",
    meta: { title: "權限不足" },
  },
  { path: "/:notFound(.*)", redirect: "/" },
];

export default routes;
