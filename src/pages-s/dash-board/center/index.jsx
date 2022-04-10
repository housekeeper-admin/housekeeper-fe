/* 个人中心主页面 */
import * as React from 'react';
import { Row, Col } from 'antd';
import ActiveMenu from '@/pages/dash-board/components/active-menu';
import AdCarousel from '@/pages/dash-board/components/ad-carousel';
import ArticleList from '@/pages/dash-board/components/article-list';
import './style.less';

export default function Center() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <ActiveMenu />
        <ArticleList />
      </Col>
      <Col span={12} style={{ height: '100%' }}>
        <AdCarousel />
      </Col>
    </Row>
  );
}
