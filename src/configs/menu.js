export default [
  {
    title: "首页",
    key: "/center"
  },
  {
    title: "个人中心",
    key: "/personal",
    children: [
      {
        title: "新人入职",
        key: "/personal/entry",
      },
      {
        title: "考勤状态",
        key: "/personal/attendance"
      },
      {
        title: "请假申请",
        key: "/personal/askleave"
      },
      {
        title: "工资详情",
        key: "/personal/wage"
      },
      {
        title: "离职申请",
        key: "/personal/resign"
      },
      {
        title: "修改个人信息",
        key: "/personal/update"
      },
    ]
  },
  {
    title: "成员管理",
    key: "/manage",
    children: [
      {
        title: "考勤管理",
        key: "/manage/attendance"
      },
      {
        title: "请假管理",
        key: "/manage/askleave"
      },
      {
        title: "离职申请处理",
        key: "/manage/resign"
      },
      {
        title: "添加新成员",
        key: "/manage/adduser"
      },
      {
        title: "后勤管理",
        key: "/manage/logistics"
      }
    ]
  },
  {
    title: "后勤服务",
    key: "/logistics"
  },
  {
    title: "文档发布",
    key: "/editor"
  }
];