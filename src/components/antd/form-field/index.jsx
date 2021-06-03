import * as React from 'react';
import {Form} from 'antd';

const FormField = (props) => {
  const {
    children,required, rules,label, name, ...reset
  } = props;

  /**
   * 绑定默认验证规则
   */
  const defaultRequireRules = React.useMemo(() => {
    if (!required) return rules;
    const labelString = typeof label === 'string' ? label : '本项';
    return [{ required: true, message: `${labelString}不能为空` }, ...(rules || [])];
  }, [label, name, required]);

  return (
    <Form.Item
      required={required}
      rules={defaultRequireRules}
      label={label}
      name={name}
      {...reset}
    >
      {
        children
      }
    </Form.Item>
  );
};

export default FormField;