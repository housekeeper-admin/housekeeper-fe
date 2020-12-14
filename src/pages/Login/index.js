import React from "react";
import { Input, Space, Button, Form, Checkbox, notification } from "antd";
import { useHistory } from "react-router-dom";
import http from "../../apis/axios";
import storage from "../../apis/storage";
import {userPort} from "../../configs/port";
import STORAGE from "../../configs/storage";
import "./index.less";
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
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
export default function Login() {
  const history = useHistory();
  /**
   * 登录提交
   * @param {object} values 
   */
  const onFinish = values => {
    http.post(userPort.login,values).then(
      res => {
        storage.set({key: STORAGE.TOKEN,value: res.token,expired:1000*60*60*24*7});
        storage.set({key:STORAGE.USER_INFO, value: {name: res.username, userId: values.userId}});
        notification.open({
          message: `欢迎回来，${res.username}~`,
          description:descList[Math.floor((Math.random()*3)+1)],
          duration: 2
        });
        setTimeout(() => {
          history.push("/");
        }, 1200);
      }
    ).catch(
      err => {console.log(err);}
    );
  };

  const onFinishFailed = () => {

  };
  const validateMessages = {
    required: "'${name}' 是必选字段",
  };
  return (
    <div className="Login">
      <div className="Title">管家婆--企业管理一站式解决方案</div>
      <div className="LoginForm">
        <Space direction="vertical" align="center" size="middle">
          <a className="Logo" href="http://59.110.163.1/houseworker/index.html"></a>
          <Form
            {...layout}
            name="basic"
            validateMessages={validateMessages}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="工号"
              name="userId"
              rules={[{ required: true, message: "请输入您的工号" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={
                [{ required: true, message: "请输入您的密码" },
                { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: "密码为八位以上大小写字母和数字的组合" }]
              }
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
                            </Button>
            </Form.Item>
          </Form>

        </Space>
      </div>
    </div>
  );
}