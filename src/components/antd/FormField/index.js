import * as React from 'react';
import {Form} from 'antd';

const FormField = (props) => {
  const {
    children,required, rules,label, ...reset
  } = props;
  const mergeRules = [...rules];
  if (required && rules && !rules.length) {
    mergeRules.push({
      required: true,
      message: `请输入你的${label}!`
    });
  }

  return (
    <Form.Item
      required={required}
      rules={mergeRules}
      label={label}
      {...reset}
    >
      {
        children
      }
    </Form.Item>
  );
};

export default FormField;