/**
 * DashBoard 管理主面板
 */
import React from "react";
import MenuList from "../../configs/menu";
import MenuItem from "antd/lib/menu/MenuItem";
import { RouteWithSubRoutes } from "../../routers/index";
import { DashRoutes } from "../../routers/config";
import { Menu, Layout, Button, Avatar, Typography, } from "antd";
import { NavLink, Redirect, Switch, useHistory } from "react-router-dom";
import redirect from "../../middleware/Redirect";
import STORAGE from "../../configs/storage";
import storage from "../../apis/storage";
import { LoginOutlined } from "@ant-design/icons";
import "./index.less";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography;
export default function DashBoard(prop) {
  
  const history = useHistory();
  /**
   * 
   * 退出登录
   */
  function handleLoginout() {
    storage.del({ key: STORAGE.TOKEN });
    history.replace("/login");
  }
  /**
   * 渲染侧边导航栏
   * @param {array} data 传入的渲染列表页
   */
  function renderMenu(data) {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <MenuItem title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </MenuItem>
      );
    });
  }
  const info = storage.get({ key: STORAGE.USER_INFO });
  return redirect(
    <Layout className="layout-header" style={{ height: "100vh" }}>
      <Header className="header" style={{ backgroundColor: "#fffff8" }}>
        <Avatar size={48} style={{ color: "#f56a00", backgroundColor: "#fde3cf", boxShadow: "0 0 2px 1px #ccc" }}>{info.name}</Avatar>
        <Text keyboard strong style={{ fontSize: "22px", lineHeight: "30px" }}>工号:{info.userId}</Text>
        <Button
          type="primary" shape="circle" icon={<LoginOutlined />} size="large"
          onClick={handleLoginout}
          style={{
            float: "right",
            marginTop: "10px"
          }} />
      </Header>
      <Layout className="layout-main">
        <Sider style={{ backgroundColor: "#fff" }}>
          <Menu style={{ width: "100%" }} mode="vertical">
            {
              renderMenu(MenuList)
            }
          </Menu>
        </Sider>
        <Content
          className="content"
        >
          <Switch>
            {
              DashRoutes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
              ))
            }
          </Switch>
          {
            window.navigator.onLine ? <Redirect to="/center"></Redirect> : <Redirect to="/offline"></Redirect>
          }
        </Content>
      </Layout>
      <Footer style={{ backgroundColor: "#434343", textAlign: "center", color: "#fff", fontSize: "16px" }}>Copyright © 2020 管家婆后台管理系统</Footer>
    </Layout>, prop);
}