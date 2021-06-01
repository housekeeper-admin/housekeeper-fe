import { Card, Col, Row } from "antd";
import React from "react";
import Form from "../../../components/Form";
import { Add_Wage } from "../../../configs/form";
import http from "../../../apis/axios";
import { wage } from "../../../configs/port";
export default function AddWage() {
  const submit = (url) => {
    const getData = async (value) => {
      value.time = value.time.valueOf();
      let res = await http.post(url, value);
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
            <Form style={{
              width: "52%",
              margin: "20px auto",
              border: "1px solid #26CB98",
              padding: "40px 20px",
              borderRadius: "16px",
              boxShadow: "0 0 6px 2px #0b8062",
              backgroundColor: "#fff"
            }}
              option={Add_Wage()}
              submit={submit(wage.add)}
              result={{
                slot: true,
                msg: "返回"
              }}></Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}