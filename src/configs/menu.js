
const menuItemsList = ({
  userId, departmentId, authority
}) => {
  console.log(userId, departmentId, authority);
  return [
    {
      title: "首页",
      key: `/center/${userId}/${authority}`
    },
    {
      title: "个人中心",
      key: `/personal/${userId}`,
      children: [
        {
          title: "新人入职",
          key: `/personal/${userId}/${departmentId}/entry`,
        },
        {
          title: "考勤状态",
          key: `/personal/${userId}/${departmentId}}/attendance`
        },
        {
          title: "请假申请",
          key: `/personal/${userId}/${departmentId}/askleave`
        },
        {
          title: "工资详情",
          key: `/personal/${userId}/wage`
        },
        {
          title: "离职申请",
          key: `/personal/${userId}/resign`
        },
        {
          title: "修改个人信息",
          key: `/personal/${userId}/update`
        },
      ]
    },
    {
      title: "成员管理",
      key: `/manage/${userId}/${authority}/${departmentId}`,
      children: [
        {
          title: "考勤管理",
          key: `/manage/${userId}/${authority}/${departmentId}/attendance`
        },
        {
          title: "请假管理",
          key: `/manage/${userId}/${authority}/${departmentId}/askleave`
        },
        {
          title: "离职申请处理",
          key: `/manage/${userId}/${authority}/${departmentId}/resign`
        },
        {
          title: "添加新成员",
          key: `/manage/${userId}/${authority}/${departmentId}/adduser`
        },
        {
          title: "后勤管理",
          key: `/manage/${userId}/${authority}/${departmentId}/logistics`
        },
        {
          title: "修改工资",
          key: `/manage/${userId}/${authority}/${departmentId}/addwage`
        }
      ]
    },
    {
      title: "后勤服务",
      key: `/logistics`
    },
    {
      title: "文档发布",
      key: `/editor/${userId}`
    }
  ];
};
export default menuItemsList;