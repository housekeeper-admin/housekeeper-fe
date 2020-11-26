export default function (name, JobId) {
  return {
    name: `${name}--${JobId}--修改密码`,
    input: {
      type: "updatePass",
      list: [
        {
          name: "oldpass",
          label: "旧密码",
          rules: [{ required: true, message: "请输入您的旧密码" }]
        },
        {
          name: "newpass",
          label: "新密码",
          rules:
            [{ required: true, message: "请输入您的新密码" },
            { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: "密码为八位以上大小写字母和数字的组合" }]
        }
      ]
    },
    radio: [
      {
        name: "first",
        label: "是否第一次修改",
        list: [
          {
            name: "否",
            value: false
          },
          {
            name: "是",
            value: true
          }
        ]
      }
    ]
  };
}