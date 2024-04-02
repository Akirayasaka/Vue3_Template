import { type App } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "@/router";
import vuetify from "./vuetify";
import "../style.css";

export const registerPlugins = (app: App<Element>) => {
  app
    .use(createPinia().use(piniaPluginPersistedstate))
    .use(VueAxios, axios)
    .use(router)
    .use(vuetify);
  return app;
};
