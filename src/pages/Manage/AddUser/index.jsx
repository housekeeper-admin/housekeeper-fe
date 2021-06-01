import { Card, Col, Row } from "antd";
import React from "react";
import Form from "../../../components/Form";
import { AddUser_Form } from "../../../configs/form";
import http from "../../../apis/axios";
import { userPort } from "../../../configs/port";
export default function AddUser() {
  const submit = (url) => {
    const getData = async (value) => {
      console.log(value);
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
          <Card title="入职安排" bordered={false}>
            <Form style={{
              width: "52%",
              margin: "20px auto",
              border: "1px solid #26CB98",
              padding: "40px 20px",
              borderRadius: "16px",
              boxShadow: "0 0 6px 2px #0b8062",
              backgroundColor: "#fff"
            }}
              option={AddUser_Form()}
              submit={submit(userPort.addUser)}
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