import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import App from "./App.vue";

// 擴充 Window 介面，讓 TypeScript 認得我們的全域設定檔格式
declare global {
  interface Window {
    __APP_CONFIG__: {
      API_BASE_URL: string;
      APP_TIMEOUT: number;
    };
  }
}

async function initApp() {
  try {
    // 加上時間戳防止瀏覽器快取舊的設定
    const response = await fetch(`/config.json?t=${new Date().getTime()}`);
    if (!response.ok) throw new Error("Network response was not ok");
    
    const config = await response.json();
    window.__APP_CONFIG__ = config;
    
  } catch (error) {
    console.error("無法載入 config.json，將採用預設設定:", error);
    // 開發環境或載入失敗時的預設值 (Fallback)
    window.__APP_CONFIG__ = {
      API_BASE_URL: "http://localhost:3000/api",
      APP_TIMEOUT: 5000
    };
  }

  // 確保設定檔掛載到 window 後，才初始化 Vue 與套件
  const app = createApp(App);
  registerPlugins(app).mount("#app");
}

// 執行應用程式啟動
initApp();

// registerPlugins(createApp(App)).mount("#app");
