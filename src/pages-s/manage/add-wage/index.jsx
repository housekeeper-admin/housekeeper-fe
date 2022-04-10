import * as React from 'react';
import { Card, Col, Row } from 'antd';
import Form from 'components/Form';
import { Add_Wage } from '@/configs/form';
import api, { client } from '@/services';

const AddWage = () => {
  const submit = url => {
    const getData = async value => {
      value.time = value.time.valueOf();
      let res = await client.post(url, value);
      if (res) {
        return true;
      }
      return false;
    };
    return getData;
  };
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={22}>
          <Card title="修改工资" bordered={false}>
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
              option={Add_Wage()}
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

export default AddWage;
