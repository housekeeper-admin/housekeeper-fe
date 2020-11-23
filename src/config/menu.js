export default [
  {
    title: "首页",
    key: "/home"
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
        title: "补签申诉",
        key: "/personal/reissue"
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
        key: "/person/resign"
      }
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
        key: "/manage/wage"
      },
      {
        title: "离职申请处理",
        key: "/manage/resign"
      },
      {
        title: "任务分配",
        key: "/manage/task"
      }
    ]
  },
  {
    title: "后勤服务",
    key: "/logistics"
  },
  {
    title: "企业通讯录",
    key: "/communication"
  }
];