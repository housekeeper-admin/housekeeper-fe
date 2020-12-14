import { message } from "antd";
import axios from "axios";
import storage from "./storage";
import STORAGE from "../configs/storage";
/**
 * http请求
 */
const http = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000
});
http.interceptors.request.use(
  config => {
    let token = storage.get({key:STORAGE.TOKEN}) || "";
    if (token) {
      config.headers["Authorization"] = "Bearer " + token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code < 1) {
      message.warn(res.message);
    } else {
      return res.data || true;
    }
  },
  error => {
    message.error(error.message);
    return false;
  }
);

export default http;