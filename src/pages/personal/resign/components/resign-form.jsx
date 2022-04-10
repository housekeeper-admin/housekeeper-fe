import * as React from 'react';
import { Form, Select, Input, Button, message } from 'antd';
import PositionOptions from '@/configs/position';
import FormField from '@/components/antd/form-field';
import api from '@/services';

const CauseTypeOptions = [
  {
    value: 'personal',
    label: '个人原因',
  },
  {
    value: 'wage',
    label: '薪资原因',
  },
  {
    value: 'disease',
    label: '疾病原因',
  },
  {
    value: 'system',
    label: '制度原因',
  },
  {
    value: 'other',
    label: '其他原因',
  },
];

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const initDefaultValue = {
  post: PositionOptions[0].value,
  type: CauseTypeOptions[0].value,
  cause: '',
};

const ResignForm = () => {
  const [formRef] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const submit = async () => {
    await formRef.validateFields();
    try {
      setLoading(true);
      const value = formRef.getFieldsValue(true);
      const params = {
        post: PositionOptions.find(item => item.value === value.post).label,
        type: CauseTypeOptions.find(item => item.value === value.type).label,
        cause: value.cause.trim(),
      };
      await api.resign.newResignProgress(params);
      message.error('提交离职请求成功');
    } catch (error) {
      message.error('提交离职申请失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={formRef}
      initialValues={initDefaultValue}
      {...layout}
      style={{
        width: '100%',
        border: '1px solid #26CB98',
        padding: '10px',
        borderRadius: '16px',
        backgroundColor: '#fff',
        boxShadow: '0 0 2px 2px #0b8062',
      }}>
      <FormField name="post" label="职位" required>
        <Select
          showSearch
          optionFilterProp="label"
          options={PositionOptions}
          filterOption={(input, option) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase())
          }
        />
      </FormField>
      <FormField name="type" label="离职原因类型" required>
        <Select options={CauseTypeOptions} />
      </FormField>
      <FormField name="cause" label="原因详情" required>
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
          发起离职申请
        </Button>
      </FormField>
    </Form>
  );
};

export default ResignForm;
