import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/components/HelloWorld.vue"),
    name: "Home",
    meta: { title: "首頁", hide: true },
    children: [],
  },
];

export default routes;
