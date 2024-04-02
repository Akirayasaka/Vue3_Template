import { createApp } from "vue";
import { registerPlugins } from '@/plugins';
import App from "./App.vue";

registerPlugins(createApp(App)).mount("#app");