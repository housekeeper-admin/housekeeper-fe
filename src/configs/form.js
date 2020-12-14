/**
 * 入职第二步所需要的表单（用户信息更新的表单）
 * @param {string} name 
 * @param {string} JobId 
 */
export function Update_UserInfo_Form(name, JobId) {
  return {
    name: `${name}--${JobId}--个人信息表`,
    input: {
      type: "user",
      list: [
        {
          name: "email",
          label: "邮箱",
          rules: [
            { type: "email", message: "请填写正确的邮箱" },
            { required: true, message: "请填写邮箱" }],
        },
        {
          name: "idCard",
          label: "身份号",
          rules: [
            { required: true, message: "请填写身份证号" }
          ]
        },
        {
          name: "card",
          label: "银行卡号",
          rules: [{ required: true, message: "请填写您的银行卡号" }]
        },
        {
          name: "phone",
          label: "手机号",
          rules: [{ required: true, message: "该项不能为空" }]
        }
      ]
    },
    radio: [
      {
        name: "sex",
        label: "性别",
        list: [
          {
            name: "男",
            value: "男"
          },
          {
            name: "女",
            value: "女"
          }
        ]
      }
    ]
  };
}

/**
 * 入职第三步所需要的表单(也可以作为修改密码的表单)
 * @param {string} name 
 * @param {string} JobId 
 */
export function Update_Pass_Form(name, JobId) {
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
/**
 * 请假申请表单
 * @param {string} name 
 * @param {string} JobId 
 */
export function AskLeave_Form(name, JobId) {
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
/**
 * 补签卡申请表单
 * @param {string} name 
 * @param {string} JobId 
 */
export function Reissue_Form(name, JobId) {
  //这里的类型只有range和current
  return {
    name: `${name}--${JobId}--补签卡`,
    input: {
      type: "user",
      list: [
        {
          name: "witness",
          label: "见证人",
          rules: [
            { required: true, message: "请填写见证人姓名" }],
        },
        {
          name: "witnessId",
          label: "见证人工号",
          rules: [
            { required: true, message: "请填写见证人工号" },
          ]
        },
        {
          name: "reason",
          label: "补签原因",
          rules: [],
        },
      ]
    },
    timePicker: [
      {
        name: "reissueTime",
        type: "current",
        label: "补签时间"
      }
    ]
  };
}
/**
 * 离职信息表
 * @param {string} name 
 * @param {string} JobId 
 */
export function Resign_Form(name, JobId) {
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
/**
 * 添加人员
 */
export function AddUser_Form() {
  return {
    name: "入职添加表",
    input: {
      type: "user",
      list: [
        {
          name: "name",
          label: "姓名",
          rules: [
            { required: true, message: "姓名不能为空" }],
        },
        {
          name: "password",
          label: "初始密码",
          rules:
            [{ required: true, message: "请输入初始密码" },
            { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: "密码为八位以上大小写字母和数字的组合" }]
        },
        {
          name: "phone",
          label: "手机号",
          rules: [
            { required: true, message: "手机号不能为空" }],
        },
        {
          name: "hr",
          label: "入职hr安排",
          rules: [
            { required: true, message: "入职hr安排" }],
        },
        {
          name: "address",
          label: "报到地址",
          rules: [
            { required: true, message: "地址不能为空" }],
        },
        {
          name: "duration",
          label: "工作期",
          rules: [
            { required: true, message: "工作期需要有一定范围" }],
        },
        {
          name: "position",
          label: "岗位",
          rules: [
            { required: true, message: "岗位" }],
        },
      ]
    },
    timePicker: [
      {
        name: "reissueTime",
        type: "current",
        label: "入职时间"
      }
    ],
    select: [
      {
        name: "department",
        label: "部门",
        placeholder: "请确认入职者部门信息",
        list: [
          {
            name: "技术部",
            value: 1
          },
          {
            name: "美工部",
            value: 2
          },
          {
            name: "服务部",
            value: 3
          },
          {
            name: "产品组",
            value: 4
          }
        ]
      }
    ]
  };
}

/**
 * 修改后勤
 */
export function Logistics_Form() {
  return {
    name: "后勤服务更新表",
    input: {
      type: "user",
      list: [
        {
          name: "id",
          label: "id",
          rules: [{ required: true, message: "后勤id，有则填写，没有填0会自动创建" }],
        },
        {
          name: "department",
          label: "服务类别",
          rules: [
            { required: true, message: "服务类别不能为空" }],
        },
        {
          name: "phone",
          label: "联系电话",
          rules: [
            { required: true, message: "联系电话" }],
        },
        {
          name: "address",
          label: "地址",
          rules: [
            { required: true, message: "地址不能为空" }],
        },
      ]
    },
  };
}