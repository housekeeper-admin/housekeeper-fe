import * as React from 'react';
import storage from "apis/storage";
import STORAGE_KEY_MAP from "configs/storage";

const updateStorage = (userInfo) => {
  if (userInfo && userInfo.userId) {
    storage.set({
      key: STORAGE_KEY_MAP.TOKEN,
      value: userInfo.userId,
      expired: 1000 * 60 * 60 * 8
    });
    storage.set({
      key: STORAGE_KEY_MAP.USER_INFO,
      value: {
        name: userInfo.username,
        userId: userInfo.userId,
        power: userInfo.authority
      }
    });
  }
};

/**
 * 
 * @param {object} userInfo 用户信息
 * @param {number} userInfo.userId
 * @param {string} userInfo.username
 * @param {number} userInfo.authority
 * @param {time} userInfo.time
 */
const useUserStorage = (userInfo) => {
  updateStorage(userInfo);
  const info = storage.get({
    key: STORAGE_KEY_MAP.USER_INFO
  });
  return info;
};

export default useUserStorage;