import * as React from 'react';
import { Form, Input, DatePicker, Select, Button, message, Divider } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import api from '@/services';
import FormField from '@/components/antd/form-field';
import PreviewResult from './preview-result';

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
  const previewRef = React.useRef(null);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [formRef] = Form.useForm();

  const validateFields = async () => {
    await formRef.validateFields();
    setPreviewVisible(true);
    const reissueValue = formRef.getFieldsValue(true);
    previewRef.current.setPreviewData({
      cause: reissueValue.cause,
      time: reissueValue.time,
      type: ReissueTypeOptions[reissueValue.type],
    });
  };

  const submit = async () => {
    await formRef.validateFields();
    try {
      previewRef.current.setLoading(true);
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
      previewRef.current.setLoading(false);
    }
  };

  const ReissueTypeOpts = Object.entries(ReissueTypeOptions).map(item => ({
    label: item[1],
    value: item[0],
  }));
  return (
    <React.Fragment>
      <Divider>补签信息表</Divider>
      <Form {...layout} initialValues={initDefaultFormValue} form={formRef}>
        <FormField label="补签类型" name="type" required>
          <Select options={ReissueTypeOpts} />
        </FormField>
        <FormField label="补签原因" name="cause" required>
          <Input.TextArea
            showCount
            autoSize={{
              minRows: 2,
            }}
          />
        </FormField>
        <FormField
          label="补签时间"
          name="time"
          required
          tooltip={<div>仅允许补签本周的签到状态</div>}>
          <DatePicker
            disabledDate={disabledDate}
            format="YYYY-MM-DD HH:mm"
            showTime={{
              format: 'HH:mm',
            }}
          />
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
        ref={previewRef}
        submit={submit}
        visible={previewVisible}
        setVisible={setPreviewVisible}
      />
    </React.Fragment>
  );
};

export default ReissueForm;
