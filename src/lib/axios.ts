import { API_URL } from "@/config/constants";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(error);
  }
);

axios.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  config.headers = {
    ...config.headers,
    // "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "all", // Note: C'est généralement pas recommandé d'avoir "all" ici pour des raisons de sécurité
    // "Access-Control-Request-Method": true,
    // "Access-Control-Request-Headers": true,
  };

  return config;
});
