import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3301/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
//API PATH = '/auth/user/register
