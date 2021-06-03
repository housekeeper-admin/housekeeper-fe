import React from "react";
export default [
  {
    /**登录页 */
    path: "/login",
    name: "Login",
    component: React.lazy(() => import("../pages/login"))
  },
  {
    /** 个人面板页 */
    path: "/",
    name: "DashBoard",
    power: 2,
    component: React.lazy(() => import("../pages/DashBoard")),
  },
  {
    /* 404 */
    path: "*",
    name: "NoMatch",
    component: React.lazy(() => import("../pages/Error/NoMatch")),
  },
];
/* 主页面 */
export const DashRoutes = [
  /* 没有权限页 */
  {
    path: "/:userId/noauth",
    name: "NoAuth",
    component: React.lazy(() => import("../pages/Error/NoAuth"))
  },
  /* 用户个人页 */
  {
    path: "/:userId/personal",
    name: "Personal",
    component: React.lazy(() => import("../pages/Personal")),
  },
  /* 管理页 */
  {
    path: "/:userId/manage",
    name: "Manage",
    component: React.lazy(() => import("../pages/Manage")),
  },
  /**center */
  {
    path: "/:userId/:authority/center",
    name: "Center",
    component: React.lazy(() => import("../pages/DashBoard/Center")),
  },
  {/* 文章详情页 */
    path: "/:userId/article/:id",
    name: "Article",
    component: React.lazy(() => import("../pages/Article"))
  },
  /**EDITOR */
  {
    path: "/:userId/editor",
    name: "Editor",
    component: React.lazy(() => import("../pages/Editor")),
  },
  {
    /* 断网页面 */
    path: "/:userId/offline",
    name: "OffLine",
    component: React.lazy(() => import("../pages/Error/OffLine"))
  },
  {
    /* 后勤 */
    path: "/:userId/logistics",
    name: "Logistics",
    component: React.lazy(() => import("../pages/Logistics"))
  },
  {
    path: "/:userId/upload",
    name: "Upload",
    component: React.lazy(() => import("../pages/FileUpload"))
  },
  {
    /* 404 */
    path: "*",
    name: "NoMatch",
    component: React.lazy(() => import("../pages/Error/NoMatch")),
  },
];
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