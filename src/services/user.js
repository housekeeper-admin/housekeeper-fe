/**
 * 用户相关的接口
 */
import client from './http';

/**
 *
 * 用户登录
 * @param {object} params 参数
 * @param {string} params.userId 用户id
 * @param {string} params.password 用户密码
 */
export const getUserLogin = params => {
  const res = client.post('/login', params);
  return res;
};

/**
 * 用户签退
 */
export const getUserLoginOut = () => {
  const res = client.post('/unLogin');
  return res;
};
/**
 * 获取用户信息
 * @param {number} userId
 */
export const getUserInfoById = userId => {
  const res = client.post('/queryById', {
    userId,
  });
  return res;
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
export const updateUserInfo = params => {
  const res = client.post('/user/updateInfo', params);
  return res;
};

/**
 *
 * @param {object} params
 * @param {string} params.phone
 * @param {string} params.password
 * @param {boolean} params.first
 */
export const updatePassword = params => {
  const res = client.post('/user/updatePass', params);
  return res;
};

/**
 * 添加新成员
 * @param {object} memberInfo
 * @param {string} memberInfo.username
 * @param {string} memberInfo.password
 * @param {number} memberInfo.phone
 * @param {string} memberInfo.sex
 * @param {string} memberInfo.email
 * @param {string} memberInfo.idCard 身份证号
 * @param {number} memberInfo.card 银行卡
 * @param {number} memberInfo.departmentId 部门Id
 * @param {number} memberInfo.authority 权限
 */
export const registerNewMember = memberInfo => {
  const res = client.post('/register', memberInfo);
  return res;
};
