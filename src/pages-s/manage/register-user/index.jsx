import * as React from 'react';
import { Card, Col, Row, message } from 'antd';
import Form from 'components/Form';
import api from '@/services';
import { AddUser_Form } from '../../../configs/form';

const AddUser = () => {
  const submit = () => {
    const getData = async value => {
      try {
        const res = await api.user.registerNewMember(value);
      } catch (error) {
        message.error('添加新成员失败');
      }
    };
    return getData;
  };
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={22}>
          <Card title="入职安排" bordered={false}>
            <Form
              style={{
                width: '52%',
                margin: '20px auto',
                border: '1px solid #26CB98',
                padding: '40px 20px',
                borderRadius: '16px',
                boxShadow: '0 0 6px 2px #0b8062',
                backgroundColor: '#fff',
              }}
              option={AddUser_Form()}
              submit={submit()}
              result={{
                slot: true,
                msg: '返回',
              }}></Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddUser;
