export default function (name, JobId) {
  return {
    name: `${name}--${JobId}--个人信息完善表`,
    input: {
      type: "user",
      list: [
        {
          name: "email",
          label: "邮箱",
          rules: [
            { type: "email",message: "请填写正确的邮箱" },
            { required: true, message: "请填写邮箱" }],
        },
        {
          name: "id",
          label: "身份号",
          rules: [
            { required: true, message: "请填写身份证号" },
            {
              pattern: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
              message: "请填写正确的大陆身份证号"
            }
          ]
        },
        {
          name: "bankid",
          label: "银行卡号",
          rules: [{ required: true, message: "请填写您的银行卡号" }]
        },
        {
          name: "address",
          label: "现住址",
          rules: [{ required: true, message: "请填写您的居住地址以便于我们能在将来远程办公" }]
        }
      ]
    },
    select: [
      {
        name: "officeSystem",
        label: "办公系统",
        placeholder: "请在与您的主管联系后确定您的办公使用系统",
        list: [
          {
            name: "Windows",
            value: "windows"
          },
          {
            name: "Linux",
            value: "linux"
          },
          {
            name: "MacOS",
            value: "macos"
          }

        ]
      },
      {
        name: "residenceType",
        label: "居住类型",
        placeholder: "请确认您的住所类型以便公司给予您完整保障",
        list: [
          {
            name: "短租",
            value: "STR"
          },
          {
            name: "长租",
            value: "LTR"
          },
          {
            name: "非租房",
            value: "RER"
          }
        ]
      }
    ],
    radio: [
      {
        name: "socialSecurity",
        label: "社保",
        list: [
          {
            name: "无社保",
            value: false
          },
          {
            name: "有社保",
            value: true
          }
        ]
      }
    ]
  };
}