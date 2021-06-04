import React from "react";
/* 主页面 */
/* 个人路由 */
export const PersonalRoutes = [
  {
    /* 请假 */
    path: "/:userId/personal/askleave",
    name: "AskLeave",
    component: React.lazy(() => import("../pages/Personal/AskLeave")),
  },
  {
    /* 考勤 */
    path: "/:userId/personal/attendance",
    name: "Attendance",
    component: React.lazy(() => import("../pages/Personal/Attendance")),
  },
  {
    /**薪资 */
    path: "/:userId/personal/wage",
    name: "Wage",
    component: React.lazy(() => import("../pages/Personal/Wage"))
  },
  {
    /*入职 */
    path: "/:userId/personal/entry",
    name: "Wage",
    component: React.lazy(() => import("../pages/Personal/Entry"))
  },
  {
    /*离职 */
    path: "/:userId/personal/resign",
    name: "Resign",
    component: React.lazy(() => import("../pages/Personal/Resign"))
  },
  {
    /*更新个人信息 */
    path: "/:userId/personal/update",
    name: "Update",
    component: React.lazy(() => import("../pages/Personal/Update"))
  },
  {
    /* 404 */
    path: "*",
    name: "NoMatch",
    component: React.lazy(() => import("../pages/Error/NoMatch")),
  },
];

/* 管理路由 */
export const ManageRoutes = [
  {
    /*考勤 */
    path: "/:userId/manage/attendance",
    name: "Wage",
    component: React.lazy(() => import("../pages/Manage/Attendance"))
  },
  {
    /*请假 */
    path: "/:userId/manage/askleave",
    name: "Resign",
    component: React.lazy(() => import("../pages/Manage/AskLeave"))
  },
  {
    /*离职 */
    path: "/:userId/manage/resign",
    name: "Resign",
    component: React.lazy(() => import("../pages/Manage/Resign"))
  },
  {
    /*添加入职人员 */
    path: "/:userId/manage/adduser",
    name: "AddUser",
    component: React.lazy(() => import("../pages/Manage/AddUser"))
  },
  {
    /*修改/添加后勤 */
    path: "/:userId/manage/logistics",
    name: "Logistics",
    component: React.lazy(() => import("../pages/Manage/Logistics"))
  },
  /* 添加工资 */
  {
    path: "/:userId/manage/addwage",
    name: "Addwage",
    component: React.lazy(() => import("../pages/Manage/AddWage"))
  },
  {
    /* 404 */
    path: "*",
    name: "NoMatch",
    component: React.lazy(() => import("../pages/Error/NoMatch")),
  },
];