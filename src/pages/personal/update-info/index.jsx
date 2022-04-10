import { Card, Col, Row } from 'antd';
import React from 'react';
import UpdateInfo from './components/update-info';
import UpdatePassword from './components/update-password';

export default function AddUser() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={12}>
          <Card title="个人信息更新" bordered={false}>
            <UpdateInfo />
          </Card>
        </Col>
        <Col span={10}>
          <Card title="更改密码" bordered={false}>
            <UpdatePassword />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
