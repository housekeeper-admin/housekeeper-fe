import client from './http';

export const getResignList = () => {
  const res = client.post('/queryAllLeave');
  return res;
};

/**
 *
 * @param {object} resignInfo
 * @param {number} resignInfo.id
 * @param {1|0} resignInfo.status
 */
export const handleResignProgress = resignInfo => {
  const { id, status } = resignInfo;
  const params = {
    leaveId: id,
    state: status,
  };
  const res = client.post('/updateLeave', params);
  return res;
};

/**
 *
 * @param {object} resignInfo
 * @param {object} resignInfo.post 职位
 * @param {object} resignInfo.type 离职原因类型
 * @param {object} resignInfo.cause 离职原因
 */
export const newResignProgress = resignInfo => {
  const res = client.post('/insertLeave', resignInfo);
  return res;
};
