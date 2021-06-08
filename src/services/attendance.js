import client from './http';
import _ from 'lodash';

/**
 * 签到列表
 * @param {string} search
 */
export const getAttendanceList = search => {
  const params = {};
  if (search.trim()) {
    params.search = search;
  }
  const res = client.post('/queryAllNoMend', params);
  return res;
};

/**
 * 处理签到流程
 * @param {object} attendanceInfo
 * @param {string[]} attendanceInfo.handlePersonList
 * @param {1 | 2} attendanceInfo.status
 * @param {string} attendanceInfo.username
 */
export const handleAttendanceProgress = attendanceInfo => {
  const params = {};
  params.arr = attendanceInfo.handlePersonList.toString();
  params.code = attendanceInfo.status;
  params.username = attendanceInfo.username;
  const res = client.post('/updateMend', params);
  return res;
};

export const getAttendanceProgressData = () => {
  const res = client.post('/findCheckById');
  return res;
};

export const getAttendanceSteps = () => {
  const res = client.post('/queryByIdAllMend');
  return res;
};

/**
 * 新建补签流程
 * @param {object} attendanceInfo
 * @param {string} attendanceInfo.cause
 * @param {moment.MomentInput} attendanceInfo.time
 */
export const newAttendanceProgressInfo = attendanceInfo => {
  const params = _.clone(attendanceInfo);
  params.time = params.time.valueOf();
  const res = client.post('/insertMend');
  return res;
};
