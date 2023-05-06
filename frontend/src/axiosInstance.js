import axios from "axios";
import { Notification } from "antd";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 500,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    alert("Something went Wrong");
  }
);
