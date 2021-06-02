/**
 * 用户相关的接口
 */
import http from "apis/axios";

/**
  * 
  * 用户登录
  * @param {object} params 参数
  * @param {string} params.userId 用户id
  * @param {string} params.password 用户密码
  */
export const getUserLogin = (params) => {
  const value = {...params};
  const res = http.post("/login", value);
  return res;
};