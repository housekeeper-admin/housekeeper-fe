import * as React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import GlobalContext from '@/context';
/**
 * 无权限页面
 */
const NoAuth = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const { userId, authority } = userInfo;
  return (
    <Result
      status="403"
      title="403"
      subTitle="您没有权限访问本页面"
      extra={
        <Button type="primary">
          <Link to={`/center/${userId}/${authority}`}>Back Home</Link>
        </Button>
      }
    />
  );
};

export default NoAuth;
