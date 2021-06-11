import * as React from 'react';
import { Space } from 'antd';
import GlobalContext from '@/context';
import UserAvatar from '@/components/user-avatar';

/**
 *
 * @param {object} props
 * @param {string} props.title  长度尽可能小于10
 */
const UserModalTitle = props => {
  const { title } = props;
  const { userInfo } = React.useContext(GlobalContext);
  return (
    <Space align="center">
      <UserAvatar
        style={{
          width: 2.4,
          height: 2.4,
        }}
        noDesc={true}
      />
      <span>{title}</span>
    </Space>
  );
};

export default UserModalTitle;
