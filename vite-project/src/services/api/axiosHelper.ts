import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";

// const baseURL = import.meta.env.VITE_BaseUrl;
const baseURL = "./";

const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在跨域請求時才會正常發出附帶 Cookie 的 header, 伺服器回應時也要一並帶上 Access-Control-Allow-Credentials: true
    //config.withCredentials = true;

    // 從 localStorage 將 token 取出
    const userData = JSON.parse(localStorage.getItem("user")!);

    // 如果 token 存在的話，則帶入到 headers 當中
    if (userData) {
      const token = userData.userToken;
      config.headers.Authorization = `bearer ${token}`;
    }

    const apiURL = `${config.url}`;
    console.log(apiURL);

    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    console.log(error);
  }
);

export const axiosHelper = axiosInstance;
