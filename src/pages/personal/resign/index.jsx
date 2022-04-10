import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import GlobalContext from '@/context';
import ResignEmail from './components/resign-email';
import ResignForm from './components/resign-form';

const Resign = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const { username, userId } = userInfo;
  return (
    <Fragment>
      <Row>
        <Col
          span={10}
          style={{
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '8px 0 0 8px',
            boxShadow: '1px 1px 4px 1px #aaa',
          }}>
          <ResignEmail />
        </Col>
        <Col span={12}>
          <ResignForm />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Resign;
