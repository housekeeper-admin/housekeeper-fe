import * as React from "react";
import _ from 'lodash';
import { Input, Button, Form, Checkbox, notification, message } from "antd";
import FormField from 'components/antd/form-field';
import { useHistory } from "react-router-dom";
import * as userApi from 'services/user';
import hooks from "@/hooks";
import GlobalContext from '@/context';
import "./index.less";


const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};
const descList = [
  "今天又是新的一天，加油哦~",
  "活力满满，备战每一天~",
  "温情的日子里有你，苦难的日子里有我",
  "打工人，冲冲冲~",
  "美好的一天，从遇见你开始"
];
const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const { updateUserInfo } = React.useContext(GlobalContext);
  /**
   * 登录提交
   * @param {object} values 
   */
  const onFinish = _.debounce(async (values) => {
    try {
      setLoading(true);
      const res = await userApi.getUserLogin(values);
      const value = hooks.useUserStorage(res);
      updateUserInfo({
        userId: value.userId,
        username: value.username,
        authority: value.authority,
        departmentId: value.departmentId
      });
      notification.open({
        message: `欢迎回来，${value.username}~`,
        description: descList[Math.floor((Math.random() * 3) + 1)],
        duration: 2
      });
      setTimeout(() => {
        history.push(`/center/${value.userId}/${value.authority}`);
      }, 1200);
    } catch (error) {
      message.error("登录失败");
    } finally {
      setLoading(false);
    }
  }, 1000);

  const onFinishFailed = () => {
    message.warn("登录失败");
  };
  const validateMessages = {
    required: "'${name}' 是必选字段",
  };
  return (
    <div className="Login">
      <div className="Title">管家婆--企业管理一站式解决方案</div>
      <div className="LoginForm">
        <Form
          {...layout}
          name="basic"
          validateMessages={validateMessages}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormField
            label="工号"
            name="userId"
            required
          >
            <Input />
          </FormField>
          <FormField
            label="密码"
            name="password"
            required
            rules={
              [{
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message: "密码为八位以上大小写字母和数字的组合"
              }]
            }
          >
            <Input.Password />
          </FormField>

          <FormField
            {...tailLayout}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>记住我</Checkbox>
          </FormField>

          <FormField {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={loading}>
              登录
              </Button>
          </FormField>
        </Form>
      </div>
    </div>
  );
};

export default Login;