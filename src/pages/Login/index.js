import React from "react";
import { Input, Space, Button, Form, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import { user } from "../../store/ActionTypes";
import store from "../../store/index";
import "./index.less";
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
};
export default function Login() {
    const UpdateLogin = user.UPDATE_LOGIN_STATUS;
    const history = useHistory();
    const onFinish = values => {
        /* React.$http.post("/",values).then(res => {
            if (res.status === 200) {
                history.push("/home");
            }
        }); */
        const action = {
            type: UpdateLogin,
            value: {
                userName: "Lucy",
                jobId: values.JobId,
                token: {
                    key: "hello",
                    value: "index"
                }
            }
        };
        store.dispatch(action);
        store.subscribe(() =>
            console.log(store.getState())
        );
        history.push("/home");
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
                            name="JobId"
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