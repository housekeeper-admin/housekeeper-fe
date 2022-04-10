import * as React from 'react';
import { Layout } from 'antd';
import moment from 'moment';

const { Footer } = Layout;

const DashFooter = () => {
  const currentYear = moment().format('YYYY');
  return (
    <Footer
      style={{
        backgroundColor: '#434343',
        textAlign: 'center',
        color: '#fff',
        fontSize: '16px',
      }}>
      Copyright © {currentYear} 管家婆后台管理系统
    </Footer>
  );
};

export default DashFooter;
