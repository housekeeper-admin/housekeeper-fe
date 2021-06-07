import client from './http';
import _ from 'lodash';

/**
 *
 * @param {object} vacationInfo
 * @param {number} vacationInfo.id 请假ID
 * @param {number} vacationInfo.enable 是否同意
 */
export const handleAskLeaveProgress = vacationInfo => {
  const { id, enable } = vacationInfo;
  const res = client.post('/review', {
    vacationId: id,
    code: !!enable,
  });
  return res;
};

/**
 * 获取待批准的请假流程列表
 */
export const getAskLeaveProgressList = () => {
  const res = client.post('/queryAllReady');
  return res;
};

/**
 * 获取本用户的请假情况
 */
export const getAskLeaveDateData = () => {
  const res = client.post('/dayMap');
  return res;
};

/**
 * 发起请假流程
 * @param {object} askLeaveData
 * @param {moment.Moment[]} askLeaveData.time
 * @param {string} askLeaveData.type 请假类型
 * @param {string} askLeaveData.cause 请假原因
 */
export const newAskLeaveProgress = askLeaveData => {
  const params = _.clone(askLeaveData);
  params.starttime = params.time[0].valueOf();
  params.endtime = params.time[1].valueOf();
  delete params.time;
  const res = client.post('/askleave', params);
  return res;
};
