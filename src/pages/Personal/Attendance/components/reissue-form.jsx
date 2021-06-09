import * as React from 'react';
import { Form, Input, DatePicker, Select, Button, message, Tooltip, Divider } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import api from '@/services';
import FormField from '@/components/antd/form-field';
import PreviewResult from './preview-result';

const { Option } = Select;

const ReissueTypeOptions = {
  'no-login-reissue': '未登录补签',
  'end-month-reissue': '月底补签',
  'business-trip-reissue': '出差',
};
const initDefaultFormValue = {
  type: 'no-login-reissue',
  cause: '',
  time: moment(),
};

const disabledDate = current => {
  return current && (current > moment().endOf('day') || current < moment().startOf('week'));
};
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const ReissueForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [resData, setResData] = React.useState(initDefaultFormValue);
  const [formRef] = Form.useForm();

  const validateFields = async () => {
    await formRef.validateFields();

    setPreviewVisible(true);
    const reissueValue = formRef.getFieldsValue(true);
    setResData({
      ...reissueValue,
      type: ReissueTypeOptions[reissueValue.type],
    });
  };

  const submit = async () => {
    await formRef.validateFields();
    try {
      const reissueValue = formRef.getFieldsValue(true);
      const { type, time, cause } = reissueValue;
      const params = {
        cause: `${ReissueTypeOptions[type]}:${cause}`,
        time: time,
      };
      await api.attendance.newAttendanceProgressInfo(params);
    } catch (error) {
      message.error('发送补签信息失败');
    } finally {
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
      <Divider>补签信息表</Divider>
      <Form {...layout} initialValues={initDefaultFormValue} form={formRef}>
        <FormField label="补签类型" name="type" required>
          <Select>
            <Option value="no-login-reissue">未登录系统</Option>
            <Option value="end-month-reissue">月底补签</Option>
            <Option value="business-trip-reissue">出差补签</Option>
          </Select>
        </FormField>
        <FormField label="补签原因" name="cause" required>
          <Input.TextArea
            showCount
            autoSize={{
              minRows: 2,
            }}
          />
        </FormField>
        <FormField label="补签时间" name="time" required>
          <DatePicker
            disabledDate={disabledDate}
            format="YYYY-MM-DD HH:mm"
            showTime={{
              format: 'HH:mm',
            }}
          />
          <Tooltip title="仅允许补签本周的签到状态">
            <QuestionCircleOutlined
              style={{
                marginLeft: 4,
                fontSize: 20,
              }}
            />
          </Tooltip>
        </FormField>
        <FormField
          style={{
            textAlign: 'center',
          }}>
          <Button type="primary" shape="round" onClick={validateFields}>
            发起补签
          </Button>
        </FormField>
      </Form>
      <PreviewResult
        submit={submit}
        visible={previewVisible}
        previewData={resData}
        loading={loading}
        setVisible={setPreviewVisible}
      />
    </React.Fragment>
  );
};

export default ReissueForm;
