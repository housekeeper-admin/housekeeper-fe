export default [
  {
    title: "首页",
    key: "/home/person"
  },
  {
    title: "个人中心",
    key: "/home/personal",
    children: [
      {
        title: "新人入职",
        key: "/home/personal/entry",
      },
      {
        title: "考勤状态",
        key: "/home/personal/attendance"
      },
      {
        title: "补签申诉",
        key: "/home/personal/reissue"
      },
      {
        title: "请假申请",
        key: "/home/personal/askleave"
      },
      {
        title: "工资详情",
        key: "/home/personal/wage"
      },
      {
        title: "离职申请",
        key: "/home/person/resign"
      }
    ]
  },
  {
    title: "成员管理",
    key: "/home/manage",
    children: [
      {
        title: "考勤管理",
        key: "/home/manage/attendance"
      },
      {
        title: "请假管理",
        key: "/home/manage/askleave"
      },
      {
        title: "离职申请处理",
        key: "/home/manage/resign"
      },
      {
        title: "任务分配",
        key: "/home/manage/task"
      }
    ]
  },
  {
    title: "后勤服务",
    key: "/home/logistics"
  },
  {
    title: "企业通讯录",
    key: "/home/communication"
  }
];