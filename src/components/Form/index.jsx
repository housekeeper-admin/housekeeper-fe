import * as React from 'react';
import { Form, Input, Select, DatePicker, Radio, Button, message, Spin } from 'antd';
import FormField from '@/components/antd/form-field';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 8 },
};

/**
 *
 * @param {object} props
 * @param {function} props.submit
 * @param {object} props.style
 * @param {object} props.option [input, select, radio, timePicker, textArea]
 */
const CommonForm = function FormPage(props) {
  const [loading, setLoading] = React.useState(false);
  const onFinish = async values => {
    try {
      setLoading(true);
      await props.submit(values);
    } catch (error) {
      message.error('表单提交失败');
    } finally {
      setLoading(false);
    }
  };
  const { input = {}, select = [], radio = [], timePicker = [], textArea = [] } = props.option;
  return (
    <Spin spinning={loading}>
      <Form {...layout} name={props.name} onFinish={onFinish} style={props.style}>
        <FormField label="类型">
          <span className="ant-form-text">{props.option.name}</span>
        </FormField>
        {input.list &&
          input.list.map((item, index) => (
            <FormField
              name={item.name}
              key={'input-' + index}
              label={item.label}
              rules={item.rules}>
              <Input />
            </FormField>
          ))}
        {select.map((option, index) => (
          <FormField name={option.name} key={'select-' + index} label={option.label}>
            <Select placeholder={option.placeholder}>
              {option.list.map((item, index) => (
                <Option value={item.value} key={'option-' + index}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </FormField>
        ))}
        {radio.map((radioItem, index) => (
          <FormField name={radioItem.name} key={'radio-' + index} label={radioItem.label}>
            <Radio.Group placeholder={radioItem.placeholder}>
              {radioItem.list &&
                radioItem.list.map((item, index) => (
                  <Radio.Button value={item.value} key={'option-' + index}>
                    {item.name}
                  </Radio.Button>
                ))}
            </Radio.Group>
          </FormField>
        ))}
        {timePicker &&
          timePicker.map((item, index) => (
            <FormField label={item.label} name={item.name} key={'dataPicker-' + index}>
              {item.type !== 'range' ? (
                <DatePicker showTime />
              ) : (
                <RangePicker showTime={{ format: 'HH:mm' }} format="lll" />
              )}
            </FormField>
          ))}
        {textArea &&
          textArea.map((item, index) => (
            <FormField label={item.label} name={item.name} key={'textArea-' + index}>
              <TextArea placeholder={item.placeholder} autoSize />
            </FormField>
          ))}
        <FormField wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormField>
      </Form>
    </Spin>
  );
};

export default CommonForm;
