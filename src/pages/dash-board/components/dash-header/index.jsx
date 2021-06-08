import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Avatar, message, Typography, Space } from 'antd';
import GlobalContext from '@/context';
import UserAvatar from '@/components/user-avatar';
import { LoginOutlined } from '@ant-design/icons';
import * as api from 'services/user';

const { Text } = Typography;
const { Header } = Layout;

const DashHeader = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const { userId, username, departmentId } = userInfo;
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  /**
   *
   * 退出登录
   */
  const handleLoginOut = async () => {
    try {
      setLoading(true);
      await api.getUserLoginOut();
      localStorage.clear();
      history.replace('/login');
    } catch (error) {
      console.log(error);
      message.error('签退失败，请稍后试试哦~');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Header
      className="header"
      style={{
        backgroundColor: '#fffff8',
      }}>
      <UserAvatar departmentId={departmentId} username={username} />
    </Header>
  );
};

export default DashHeader;
