export default function(name, JobId) {
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
            { required: true,message: "请填写见证人姓名" }],
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