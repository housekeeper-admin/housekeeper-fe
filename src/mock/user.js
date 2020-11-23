import Mock from "mockjs";
let data = Mock.mock("/user", "post", function (options) {
  return {data: options};
});
export default data;