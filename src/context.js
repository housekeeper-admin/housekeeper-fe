import * as React from 'react';

const defaultUserInfo = {
  userId: undefined,
  username: '',
  departmentname: '',
  authority: 0,
  departmentId: undefined,
  email: '',
  sex: '男',
  phone: undefined,
};

/**
 *
 * @param {object} userInfo
 * @param {number} userInfo.userId
 * @param {string} userInfo.username
 * @param {number} userInfo.authority
 * @param {number} userInfo.departmentId
 * @param {string} userInfo.email
 * @param {string} userInfo.sex
 * @param {number} userInfo.phone
 */
const updateUserInfo = userInfo => {};

export const defaultContext = {
  userInfo: defaultUserInfo,
  updateUserInfo: updateUserInfo,
};

const GlobalContext = React.createContext(defaultContext);

export default GlobalContext;
