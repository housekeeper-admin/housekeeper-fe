/**
 * 用户接口
 */
export const userPort = {
  login: "/user/login",
  updateUserInfo: "/user/updateInfo",
  updatePassword: "/user/updatePass",
  userInfo: "/user/info",
  /* 管理 */
  addUser: "/manage/adduser"
};
/**
 * 文章接口
 */
export const article = {
  list: "/article/list",
  detail: "/article/detail",
  new: "/article/new"
};
/**
 * 工资接口
 */
export const wage = {
  info: "/wage/info"
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
  data: "/askleave",
  form: "/askleave/form",
  /* 管理请假 */
  list: "/manage/askleave/list",
  handle: "/manage/askleave/handle"
};

/* 
签到
*/

export const attendance = {
  data: "/attendance",
  form: "/attendance/form",
  step: "/attendance/step",
  /* 管理 */
  list: "/manage/attendance/list",
  handle: "/manage/attendance/handle"
};

/* 离职 */

export const resign = {
  form : "/resign/form",
  /* 管理者 */
  list: "/manage/resign/list",
  handle: "/manage/resign/handle"
};
