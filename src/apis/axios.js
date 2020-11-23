/**
 * 网络请求配置
 */
import axios from "axios";
axios.defaults.timeout = 100000;
axios.defaults.baseURL = "http://localhost:8000";
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  console.log(response.data);
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios;