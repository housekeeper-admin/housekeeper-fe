import storage from './storage';
import STORAGE_KEY_MAP from '@/storage/storage-key-map.config';

const updateStorage = userInfo => {
  if (userInfo && userInfo.userId) {
    storage.set({
      key: STORAGE_KEY_MAP.TOKEN,
      value: userInfo.userId,
      expired: 1000 * 60 * 60 * 8,
    });
    storage.set({
      key: STORAGE_KEY_MAP.USER_INFO,
      value: {
        username: userInfo.username,
        userId: userInfo.userId,
        authority: userInfo.authority,
        departmentId: userInfo.departmentId,
        email: userInfo.email,
        sex: userInfo.sex,
        phone: userInfo.phone,
      },
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
 * @param {string} userInfo.email
 * @param {string} userInfo.sex
 * @param {number} userInfo.phone
 */
const setUserStorage = userInfo => {
  updateStorage(userInfo);
  const info = storage.get({
    key: STORAGE_KEY_MAP.USER_INFO,
  });
  return info;
};

export default setUserStorage;
