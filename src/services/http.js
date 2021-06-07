import axios from 'axios';
import STG from '@/storage';
/**
 * http请求
 */
const http = axios.create({
  baseURL: 'http://192.168.43.141:8081/Company01_war_exploded/home/personal',
  timeout: 5000,
});
http.interceptors.request.use(
  config => {
    const token = STG.storage.get({ key: STG.STORAGE_KEY_MAP.TOKEN }) || null;
    if (token) {
      config.headers['Authorization'] = token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    return new Error(error);
  }
);

http.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code < 1) {
      return null;
    }
    return res.data;
  },
  error => {
    return new Error(error);
  }
);

export default http;
