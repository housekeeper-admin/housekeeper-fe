import * as React from 'react';
import { Form, Input, Radio, Button, message } from 'antd';
import FormField from '@/components/antd/form-field';
import GlobalContext from '@/context';
import api from '@/services';
import STG from '@/storage';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const UpdateInfo = props => {
  const { style = {}, setStepStatus = () => {} } = props;
  const [formRef] = Form.useForm();
  const { userInfo } = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState(false);
  const initDefaultValue = {
    email: userInfo.email,
    idCard: userInfo.userId,
    card: '',
    phone: userInfo.phone,
    sex: userInfo.sex,
  };

  const submit = async () => {
    await formRef.validateFields();
    try {
      setLoading(true);
      const info = formRef.getFieldsValue(true);
      await api.user.updateUserInfo(info);
      message.success('更新用户信息成功');
      setStepStatus([true, true, false]);
      STG.setUserStorage({
        ...userInfo,
        email: info.email,
        phone: info.phone,
      });
    } catch (error) {
      message.error('更新用户信息失败');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form initialValues={initDefaultValue} form={formRef} {...layout} style={style}>
      <FormField label="邮箱" name="email" required>
        <Input />
      </FormField>
      <FormField label="身份证号" name="idCard" required>
        <Input disabled />
      </FormField>
      <FormField label="银行卡号" name="card" required>
        <Input />
      </FormField>
      <FormField label="手机号" name="phone" required>
        <Input type="tel" />
      </FormField>
      <FormField name="sex" label="性别">
        <Radio.Group disabled size="large">
          <Radio.Button value="男">男</Radio.Button>
          <Radio.Button value="女">女</Radio.Button>
        </Radio.Group>
      </FormField>
      <FormField
        style={{
          textAlign: 'center',
        }}>
        <Button loading={loading} type="primary" shape="round" onClick={submit}>
          更新用户信息
        </Button>
      </FormField>
    </Form>
  );
};

export default UpdateInfo;
