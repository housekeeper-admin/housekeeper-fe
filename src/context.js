import * as React from 'react';

const defaultUserInfo = {
  userId: undefined,
  username: '',
  auth: 0,
  departmentId: -1,
};

/**
 * 
 * @param {object} userInfo 
 * @param {number} userInfo.userId
 * @param {string} userInfo.username
 * @param {number} userInfo.auth
 * @param {number} userInfo.departmentId
 */
const updateUserInfo = (userInfo) => {};

export const defaultContext = {
  userInfo: defaultUserInfo,
  updateUserInfo: updateUserInfo
};

const GlobalContext = React.createContext(defaultContext);

export default GlobalContext;