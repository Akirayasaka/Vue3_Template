import { type App } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "@/router";
import vuetify from "./vuetify";
import "../style.css";

/** 註冊套件功能至全域 */
export const registerPlugins = (app: App<Element>) => {
  // 從全域變數讀取剛才載入的設定，並套用至 Axios 全域預設設定
  axios.defaults.baseURL = window.__APP_CONFIG__.API_BASE_URL;
  axios.defaults.timeout = window.__APP_CONFIG__.APP_TIMEOUT;

  app
    .use(createPinia().use(piniaPluginPersistedstate))
    .use(VueAxios, axios)
    .use(router)
    .use(vuetify);
  return app;
};
