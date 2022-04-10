import * as React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';
import GlobalContext from '@/context';
/**
 * 404页面
 */
const NoMatch = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const { userId, authority } = userInfo;
  return (
    <Result
      status="404"
      title="404"
      subTitle="您的页面走丢了"
      extra={
        <Button type="primary">
          <Link to={`/center/${userId}/${authority}`}>Back Home</Link>
        </Button>
      }
    />
  );
};

export default NoMatch;
