import * as React from 'react';
import { useHistory } from "react-router-dom";
import { Layout, Button, Avatar, message, Typography } from "antd";
import GlobalContext from '@/context';
import { LoginOutlined } from "@ant-design/icons";
import * as api from 'services/user';

const { Text } = Typography;
const { Header } = Layout;
const AuthColor = [
  '#f56a00',
  '#02a9f7',
  '#06f0c9',
  '#a70eff'
];

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
      history.replace("/login");
    } catch (error) {
      message.error("签退失败，请稍后试试哦~");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Header
      className="header"
      style={{
        backgroundColor: "#fffff8"
      }}>
      <Avatar
        size={48}
        style={{
          color: '#fde3cf',
          backgroundColor: AuthColor[departmentId % 4],
          boxShadow: "0 0 2px 1px #ccc"
        }}>{username}</Avatar>
      <Text keyboard strong style={{ fontSize: "22px", lineHeight: "30px" }}>工号:{userId}</Text>
      <Button
        type="primary"
        shape="circle"
        icon={<LoginOutlined />}
        loading={loading}
        size="large"
        onClick={handleLoginOut}
        style={{
          float: "right",
          marginTop: "10px"
        }} />
    </Header>
  );
};

export default DashHeader;