import Mock from "mockjs";
let data = Mock.mock("/userInfo","get", {
  "userinfo|40": [{
    "id|+1": 1,
    "name": "@cname",
    "age|18-28": 25,
    "sex|1": ["男", "女"],
    "job|1": ["销售", "经理", "工程师", "开发人员","主管","总监"],
  }]
});
export default data;