import axios from "axios";
import storage from "./storage";
import STORAGE from "../configs/storage";
import {message} from 'antd';
/**
 * http请求
 */
const http = axios.create({
  baseURL: '/api',
  timeout: 5000
});
http.interceptors.request.use(
  config => {
    const token = storage.get({key:STORAGE.TOKEN}) || null;
    if (token) {
      config.headers["Authorization"] =  token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    message.error(error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code < 1) {
      return false;
    }
    return res.data || true;
  },
  error => {
    message.error(error);
    return false;
  }
);

export default http;