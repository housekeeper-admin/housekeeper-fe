import { Card, Col, Row } from "antd";
import React from "react";
import Form from "components/Form";
import { Update_UserInfo_Form, Update_Pass_Form } from "../../../configs/form";
import http from "../../../apis/axios";
import storage from "../../../apis/storage";
import STORAGE from "../../../configs/storage";
import { userPort } from "../../../configs/port";
export default function AddUser() {
  const userInfo = storage.get({key:STORAGE.USER_INFO}) || null;
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
        <Col span={16}>
          <Card title="个人信息更新" bordered={false}>
            <Form style={{
              width: "60%",
              margin: "20px auto",
              border: "1px solid #26CB98",
              padding: "40px 20px",
              borderRadius: "16px",
              boxShadow: "0 0 6px 2px #0b8062",
              backgroundColor: "#fff"
            }}
              option={Update_UserInfo_Form(userInfo?.name, userInfo?.userId)}
              submit={submit(userPort.updateUserInfo)}
              result={{
                slot: true,
                msg: "返回"
              }}></Form>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="更改密码" bordered={false}>
            <Form style={{
              width: "90%",
              margin: "20px auto",
              border: "1px solid #26CB98",
              padding: "40px 20px",
              borderRadius: "16px",
              boxShadow: "0 0 6px 2px #0b8062",
              backgroundColor: "#fff"
            }}
              option={Update_Pass_Form(userInfo?.name, userInfo?.userId)}
              submit={submit(userPort.updatePassword)}
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