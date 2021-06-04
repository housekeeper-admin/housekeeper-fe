/**
 * DashBoard 管理主面板
 */
import React, { Fragment, useContext } from "react";
import buildMenuList from "configs/menu";
import MenuItem from "antd/lib/menu/MenuItem";
import CenterRouters from './router';
import { Menu, Layout, } from "antd";
import { NavLink,} from "react-router-dom";
import DashHeader from './dash-header';
import GlobalContext from '@/context';
import "./index.less";
const { Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;



const renderMenu = (data) => {
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
};
export default function DashBoard() {
  const { userInfo } = useContext(GlobalContext);
  const { userId, authority, departmentId } = userInfo;
  const MenuList = React.useMemo(() => buildMenuList(
    { userId, departmentId, authority }
  ), [userId, departmentId, authority]);

  /**
   * 渲染侧边导航栏
   * @param {array} data 传入的渲染列表页
   */
  return (
    <Fragment>
      <Layout
        className="layout-header"
        style={{ height: "100vh" }}
      >
        <DashHeader />
        <Layout className="layout-main">
          <Sider
            style={{
              backgroundColor: "#fff"
            }}
          >
            <Menu
              style={{
                width: "100%"
              }}
              mode="vertical">
              {
                renderMenu(MenuList)
              }
            </Menu>
          </Sider>
          <Content
            className="content"
          >
            <CenterRouters />
          </Content>
        </Layout>
        <Footer
          style={{
            backgroundColor: "#434343",
            textAlign: "center",
            color: "#fff",
            fontSize: "16px"
          }}
        >
          Copyright © 2020 管家婆后台管理系统
        </Footer>
      </Layout>
    </Fragment>
  );
}