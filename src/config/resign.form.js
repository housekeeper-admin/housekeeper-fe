export default function (name, JobId) {
  return {
    name: `${name}--${JobId}--个人离职信息表`,
    input: {
      type: "user",
      list: [
        {
          name: "department",
          label: "原部门",
          rules: [
            { required: true, message: "请填写部门信息" }],
        },
        {
          name: "position",
          label: "职位",
          rules: [
            { required: true, message: "职位" },
          ]
        },
        {
          name: "future",
          label: "去向",
          rules: [{ required: true, message: "请务必填写您的去向" }]
        }
      ]
    },
    select: [
      {
        name: "reason",
        label: "离职原因",
        placeholder: "您的离职原因将使我们反思是否是我们不够好",
        list: [
          {
            value: "Personal",
            name: "个人原因"
          },
          {
            value: "Wage",
            name: "薪资原因"
          },
          {
            value: "Disease",
            name: "疾病原因"
          },
          {
            value: "System",
            name: "制度原因"
          },
          {
            value: "Other",
            name: "其他原因"
          }

        ]
      },
    ],
    radio: [
      {
        name: "Next",
        label: "是否找到下家",
        list: [
          {
            name: "未找到",
            value: false
          },
          {
            name: "已找到",
            value: true
          }
        ]
      }
    ],
    textArea: [
      {
        name: "reason_detail",
        label: "离职原因(详细描述)",
        placeholder: "请在这里描述您离职的详细原因，以便为您尽快处理您的离职流程"
      }
    ]
  };
}