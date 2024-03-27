import axios from "axios";

const baseUrl = "http://localhost:8080";

export const appAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

appAxios.interceptors.request.use(
  (config) => {
    const token = JSON.parse(sessionStorage.getItem("user"));
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const thirdPartyAxios = axios.create();
