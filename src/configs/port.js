/**
 * 用户接口
 */
export const userPort = {
  login: "/login",
  updateUserInfo: "/user/updateInfo",
  updatePassword: "/user/updatePass",
  userInfo: "/user/info",
  //TODO:签退并注销
  loginOut: "/unLogin",
  /* 管理 */
  addUser: "/register"
};
/**
 * 文章接口
 */
export const article = {
  list: "/queryTxtAll",
  detail: "/queryTxtById",
  new: "/addTxt"
};
/**
 * 工资接口
 */
export const wage = {
  history: "/queryWagesById",
  add: "/insertWages"
};
/* 后勤 */
export const logistics = {
  list: "/logistics"
};
/* 入职 */
export const entry = {
  offer: "/entry/offer"
};
/**
 * 请假
 */
export const askleave = {
  data: "/dayMap",
  form: "/askleave",
  /* 管理请假 */
  list: "/queryAllReady",
  handle: "/review"
};

/* 
签到
*/

export const attendance = {
  data: "/findCheckById",
  form: "/insertMend",
  step: "/queryByIdAllMend",
  /* 管理 */
  list: "/queryAllNoMend",
  handle: "/updateMend"
};

/* 离职 */

export const resign = {
  form : "/insertLeave",
  /* 管理者 */
  list: "/queryAllLeave",
  handle: "/updateLeave"
};
