import * as React from 'react';
import _ from 'lodash';
import { Form, Input, DatePicker, Select, Button, message, Divider, Typography } from 'antd';
import moment from 'moment';
import api from '@/services';
import FormField from '@/components/antd/form-field';
import AskleaveTime from './askleave-time';

const AskleaveTypeOptions = {
  'personal-leave': '事假',
  'sick-leave': '病假',
  'maternity-leave': '产假',
  'expatriate-leave': '公司外派假期',
};
const initDefaultFormValue = {
  type: 'personal-leave',
  cause: '',
  time: [moment().startOf('day'), moment().startOf('day')],
};

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const ReissueForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [formRef] = Form.useForm();

  const submit = async () => {
    await formRef.validateFields();
    try {
      setLoading(true);
      const askleaveValue = formRef.getFieldsValue(true);
      askleaveValue.type = AskleaveTypeOptions[askleaveValue.type];
      await api.askleave.newAskLeaveProgress(askleaveValue);
      message.success('发起请假成功');
    } catch (error) {
      message.error('发送请假信息失败');
    } finally {
      setLoading(false);
    }
  };
  const AskleaveTypeOpts = React.useMemo(
    () =>
      Object.entries(AskleaveTypeOptions).map(item => ({
        value: item[0],
        label: item[1],
      })),
    []
  );
  return (
    <React.Fragment>
      <Divider>补签信息表</Divider>
      <Form {...layout} initialValues={initDefaultFormValue} form={formRef}>
        <FormField label="请假类型" name="type" required>
          <Select options={AskleaveTypeOpts} />
        </FormField>
        <FormField label="请假时间" name="time" required>
          <AskleaveTime />
        </FormField>
        <FormField label="请假原因" name="cause" required>
          <Input.TextArea
            showCount
            autoSize={{
              minRows: 2,
            }}
          />
        </FormField>
        <FormField
          style={{
            textAlign: 'center',
          }}>
          <Button loading={loading} type="primary" shape="round" onClick={submit}>
            发起请假
          </Button>
        </FormField>
      </Form>
    </React.Fragment>
  );
};

export default ReissueForm;
