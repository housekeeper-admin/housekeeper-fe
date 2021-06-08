import client from './http';

/**
 * 获取历史工资记录
 * @param {number} userId
 */
export const getWageHistory = userId => {
  const res = client.post('/queryWagesById', {
    userId: userId,
  });
  return res;
};

/**
 * 添加本月工资
 * @param {object} wageInfo
 * @param {number} userId
 * @param {number} basepay
 * @param {number} reward
 * @param {number} allowance
 * @param {number} time
 */
export const addCurrentWage = wageInfo => {
  const res = client.post('/insertWages', wageInfo);
  return res;
};
