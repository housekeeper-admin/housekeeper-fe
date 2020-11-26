import { Form, Input, Select, Radio, Button, message, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import React, { Fragment, useState } from "react";
const { Option } = Select;
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export default function FormPage(prop) {
  const [state, setstate] = useState(false);
  const onFinish = values => {
    console.log(values);
    message.success("提交成功啦");
    setstate(true);
  };
  console.log(prop.option);
  const { input = [], select = [], radio = [] } = prop.option;
  return (
    <Fragment>
      {
        state ?
          <Result
            icon={<SmileOutlined />}
            title="很好，我们将尽快为您处理~~"
          /> :
          <Form {...layout} name={prop.name} onFinish={onFinish} validateMessages={validateMessages} style={prop.style}>
            <Form.Item label="表单类型">
              <span className="ant-form-text">{prop.option.name}</span>
            </Form.Item>
            {
              input.list.map((item, index) => (
                <Form.Item name={[input.type, item.name]} key={"input-" + index} label={item.label} rules={[item.rules]}>
                  <Input />
                </Form.Item>
              ))
            }
            {
              select.map((option, index) => (
                <Form.Item name={option.name} rules={[{ required: true, message: "请务必选择一项" }]} key={"select-" + index} label={option.label} >
                  <Select placeholder={option.placeholder}>
                    {
                      option.list.map((item, index) => (
                        <Option value={item.value} key={"option-" + index}>{item.name}</Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              ))
            }
            {
              radio.map((radioItem, index) => (
                <Form.Item rules={[{ required: true, message: "请务必选择一项" }]} name={radioItem.name} key={"radio-" + index} label={radioItem.label} >
                  <Radio.Group placeholder={radioItem.placeholder}>
                    {
                      radioItem.list.map((item, index) => (
                        <Radio.Button value={item.value} key={"option-" + index}>{item.name}</Radio.Button>
                      ))
                    }
                  </Radio.Group>
                </Form.Item>
              ))
            }
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
              <Button type="primary" htmlType="submit">
                提交
        </Button>
            </Form.Item>
          </Form>
      }
    </Fragment>
  );
}
