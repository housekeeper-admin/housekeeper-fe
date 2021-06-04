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
  const res = http.post("/login", params);
  return res;
};

/**
 * 用户签退
 */
export const getUserLoginOut = async () => {
  await http.post("/unLogin");
  localStorage.clear();
};

/**
 * 更新用户信息
 * @param {object} params
 * @param {string} params.email
 * @param {string} params.idCard
 * @param {string} params.card
 * @param {string} params.phone
 * @param {string} params.sex
 */
export const updateUserInfo = (params) => {
  const res= http.post("/user/updateInfo", params);
  return res;
};

/**
 * 
 * @param {object} params
 * @param {string} params.phone
 * @param {string} params.password
 * @param {boolean} params.first
 */
export const updatePassword = (params) => {
  const res = http.post("/user/updatePass", params);
  return res;
};

