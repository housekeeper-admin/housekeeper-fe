import * as React from 'react';
import storage from "apis/storage";
import STORAGE_KEY_MAP from "configs/storage";

const defaultUserInfo = storage.get({
  key: STORAGE_KEY_MAP.USER_INFO
}) || {
  userId: undefined,
  username: '',
  authority: 0,
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