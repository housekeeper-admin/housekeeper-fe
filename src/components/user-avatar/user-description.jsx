import * as React from 'react';
import { Descriptions } from 'antd';

/**
 *
 * @param {object} props
 * @param {object} props.userInfo
 */
const UserDescription = props => {
  const { userInfo } = props;
  const { userId, phone, email, departmentId, username } = userInfo;
  return (
    <Descriptions column={1} size="small" className="user-description">
      <Descriptions.Item label="姓名">{username}</Descriptions.Item>
      <Descriptions.Item label="工号">{userId}</Descriptions.Item>
      <Descriptions.Item label="部门">{departmentId}</Descriptions.Item>
      <Descriptions.Item label="email">{email}</Descriptions.Item>
      <Descriptions.Item label="手机号">{phone}</Descriptions.Item>
    </Descriptions>
  );
};

export default UserDescription;
