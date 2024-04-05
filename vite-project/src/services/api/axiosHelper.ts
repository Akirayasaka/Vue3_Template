import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";

/** 基底網址路徑，可根據環境設定不同.env檔案 */
const baseURL = import.meta.env.VITE_BaseUrl;

/** 建立自定義axios實體 */
const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

//#region request動作時，預設行為
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在跨域請求時才會正常發出附帶 Cookie 的 header, 伺服器回應時也要一並帶上 Access-Control-Allow-Credentials: true
    //config.withCredentials = true;

    // 從 localStorage 將 token 取出
    // const userData = JSON.parse(localStorage.getItem("user")!);

    // 如果 token 存在的話，則帶入到 headers 當中
    // if (userData) {
    //   const token = userData.userToken;
    //   config.headers.Authorization = `bearer ${token}`;
    // }

    const apiURL = `${config.url}`;
    console.log(apiURL);

    return config;
  },
  (err) => Promise.reject(err)
);
//#endregion

//#region response動作時，預設行為
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    console.log(error);
  }
);
//#endregion

export const axiosHelper = axiosInstance;
