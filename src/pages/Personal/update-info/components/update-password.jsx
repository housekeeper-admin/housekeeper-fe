import * as React from 'react';
import { Form, Input, Radio, Button, message } from 'antd';
import FormField from '@/components/antd/form-field';
import GlobalContext from '@/context';
import api from '@/services';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const UpdateInfo = props => {
  const { style = {}, setStepStatus = () => {} } = props;
  const [formRef] = Form.useForm();
  const { userInfo } = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState(false);
  const initDefaultValue = {
    email: userInfo.email,
    phone: userInfo.phone,
    first: userInfo.sex,
  };

  const submit = async () => {
    await formRef.validateFields();
    try {
      setLoading(true);
      const info = formRef.getFieldsValue(true);
      await api.user.updatePassword(info);
      setStepStatus([true, true, true]);
      message.success('更改密码成功');
    } catch (error) {
      message.error('更改密码失败');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form initialValues={initDefaultValue} form={formRef} {...layout} style={style}>
      <FormField label="验证手机号" name="phone" required>
        <Input type="tel" />
      </FormField>
      <FormField
        label="新密码"
        name="password"
        rules={[
          { required: true, message: '请输入您的新密码' },
          {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            message: '密码为八位以上大小写字母和数字的组合',
          },
        ]}
        required>
        <Input.Password />
      </FormField>
      <FormField name="first" label="是否第一次修改">
        <Radio.Group size="large">
          <Radio.Button value={false}>否</Radio.Button>
          <Radio.Button value={true}>是</Radio.Button>
        </Radio.Group>
      </FormField>
      <FormField
        style={{
          textAlign: 'center',
        }}>
        <Button loading={loading} type="primary" shape="round" onClick={submit}>
          修改密码
        </Button>
      </FormField>
    </Form>
  );
};

export default UpdateInfo;
