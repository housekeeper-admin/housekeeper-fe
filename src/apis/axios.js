import axios from "axios";
import storage from "./storage";
import STORAGE from "../configs/storage";
/**
 * http请求
 */
const http = axios.create({
  baseURL: "http://192.168.43.141:8081/Company01_war_exploded/home/personal",
  timeout: 5000
});
http.interceptors.request.use(
  config => {
    let token = storage.get({key:STORAGE.TOKEN}) || null;
    if (token) {
      config.headers["Authorization"] =  token; // 让每个请求携带自定义token 请根据实际情况自行修改
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
      return false;
    } else {
      return res.data || true;
    }
  },
  error => {
    console.error(error);
    return false;
  }
);

export default http;