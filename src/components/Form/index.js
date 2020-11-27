import { Form, Input, Select, DatePicker, Radio, Button, message, Result, } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import React, { Fragment, useState } from "react";
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
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
  console.log(prop);
  const { input = {}, select = [], radio = [], timePicker = [], textArea = [] } = prop.option;
  return (
    <Fragment>
      {
        state ?
          <Result
            icon={<SmileOutlined />}
            title="很好，我们将尽快为您处理~~"
            extra={prop.result && (prop.result.slot?<Button onClick={()=>{setstate(false);}}>{prop.result.msg || "完成"}</Button>:"")}
          /> :
          <Form {...layout} name={prop.name} onFinish={onFinish} validateMessages={validateMessages} style={prop.style}>
            <Form.Item label="类型">
              <span className="ant-form-text">{prop.option.name}</span>
            </Form.Item>
            {
              input.list && input.list.map((item, index) => (
                <Form.Item name={[input.type, item.name]} key={"input-" + index} label={item.label} rules={item.rules}>
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
                      radioItem.list && radioItem.list.map((item, index) => (
                        <Radio.Button value={item.value} key={"option-" + index}>{item.name}</Radio.Button>
                      ))
                    }
                  </Radio.Group>
                </Form.Item>
              ))
            }
            {
              timePicker && timePicker.map((item, index) => (
                <Form.Item label={item.label} rules={[{ required: true, message: "请选择时间" }]} name={item.name} key={"dataPicker-"+index}>
                  {
                    item.type !== "range" ?
                      <DatePicker showTime/> :
                      <RangePicker
                        showTime={{ format: "HH:mm" }}
                        format="YYYY-MM-DD HH:mm"
                      />
                  }
                </Form.Item>
              ))
            }
            {
              textArea && textArea.map((item, index) => (
                <Form.Item label={item.label} rules={item.rules || []} name={item.name} key={"textArea-"+index}>
                  <TextArea placeholder={item.placeholder} autoSize />
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
