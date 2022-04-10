/**
 * DashBoard 管理主面板
 */
import * as React from 'react';
import { Layout } from 'antd';

import CenterRouters from './router';
import DashHeader from './components/dash-header';
import DashFooter from './components/dash-footer';
import DashMenu from './components/dash-menu';
import './style.less';

const { Sider, Content } = Layout;

const DashBoard = () => {
  return (
    <Layout className="layout-header" style={{ height: '100vh' }}>
      <DashHeader />
      <Layout className="layout-main">
        <Sider
          style={{
            backgroundColor: '#fff',
          }}>
          <DashMenu />
        </Sider>
        <Content className="content">
          <CenterRouters />
        </Content>
      </Layout>
      <DashFooter />
    </Layout>
  );
};

export default DashBoard;
