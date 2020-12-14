import React from "react";
export default [
  {
    /**登录页 */
    path: "/login",
    name: "Login",
    component: React.lazy(() => import("../pages/Login"))
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
    path: "/noauth",
    name: "NoAuth",
    component: React.lazy(() => import("../pages/Error/NoAuth"))
  },
  /* 用户个人页 */
  {
    path: "/personal",
    name: "Personal",
    component: React.lazy(() => import("../pages/Personal")),
  },
  /* 管理页 */
  {
    path: "/manage",
    name: "Manage",
    component: React.lazy(() => import("../pages/Manage")),
  },
  /**center */
  {
    path: "/center",
    name: "Center",
    component: React.lazy(() => import("../pages/DashBoard/Center")),
  },
  {/* 文章详情页 */
    path: "/article/:id",
    name: "Article",
    component: React.lazy(()=> import("../pages/Article"))
  },
  /**EDITOR */
  {
    path: "/editor",
    name: "Editor",
    component: React.lazy(() => import("../pages/Editor")),
  },
  {
    /* 断网页面 */
    path: "/offline",
    name: "OffLine",
    component: React.lazy(()=> import("../pages/Error/OffLine"))
  },
  {
    /* 后勤 */
    path: "/logistics",
    name: "Logistics",
    component: React.lazy(() => import("../pages/Logistics"))
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
    path: "/personal/askleave",
    name: "AskLeave",
    component: React.lazy(() => import("../pages/Personal/AskLeave")),
  },
  {
    /* 考勤 */
    path: "/personal/attendance",
    name: "Attendance",
    component: React.lazy(() => import("../pages/Personal/Attendance")),
  },
  {
    /**薪资 */
    path: "/personal/wage",
    name: "Wage",
    component: React.lazy(() => import("../pages/Personal/Wage"))
  },
  {
    /*入职 */
    path: "/personal/entry",
    name: "Wage",
    component: React.lazy(() => import("../pages/Personal/Entry"))
  },
  {
    /*离职 */
    path: "/personal/resign",
    name: "Resign",
    component: React.lazy(() => import("../pages/Personal/Resign"))
  },
  {
    /*更新个人信息 */
    path: "/personal/update",
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
    path: "/manage/attendance",
    name: "Wage",
    component: React.lazy(() => import("../pages/Manage/Attendance"))
  },
  {
    /*请假 */
    path: "/manage/askleave",
    name: "Resign",
    component: React.lazy(() => import("../pages/Manage/AskLeave"))
  },
  {
    /*离职 */
    path: "/manage/resign",
    name: "Resign",
    component: React.lazy(() => import("../pages/Manage/Resign"))
  },
  {
    /*添加入职人员 */
    path: "/manage/adduser",
    name: "AddUser",
    component: React.lazy(() => import("../pages/Manage/AddUser"))
  },
  {
    /*修改/添加后勤 */
    path: "/manage/logistics",
    name: "Logistics",
    component: React.lazy(() => import("../pages/Manage/Logistics"))
  },
  {
    /* 404 */
    path: "*",
    name: "NoMatch",
    component: React.lazy(() => import("../pages/Error/NoMatch")),
  },
];