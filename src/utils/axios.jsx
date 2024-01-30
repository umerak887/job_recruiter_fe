import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3301/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Request failed:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
