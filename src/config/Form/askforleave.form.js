export default function (name, JobId) {
  return {
    name: `${name}--${JobId}--请假申请表`,
    input: {
      type: "user",
      list: [
        {
          name: "reason_simple",
          label: "原因简述",
          rules: [
            { required: true, message: "请填写原因简述" }],
        }
      ]
    },
    timePicker: [
      {
        name: "reissueTime",
        type: "range",
        label: "请假时间"
      }
    ],
    select: [
      {
        name: "type",
        label: "请假类型",
        placeholder: "请在发出申请后尽快与您的主管联系",
        list: [
          {
            name: "事假",
            value: 1
          },
          {
            name: "病假",
            value: 2
          },
          {
            name: "产假",
            value: 3
          },
          {
            name: "公司外派假期",
            value: 4
          }
        ]
      }
    ],
    radio: [
      {
        name: "rseimbursement",
        label: "假期出行是否报销",
        list: [
          {
            name: "不报销",
            value: false
          },
          {
            name: "报销",
            value: true
          }
        ]
      }
    ],
    textArea: [
      {
        name: "reason_detail",
        label: "请假原因(详细描述)",
        placeholder: "请尽可能清楚的描述您的请假原因以便主管可以快速审阅。"
      }
    ]
  };
}