import React, { Fragment, useState, useEffect } from "react";
import { List, Card, Row, Col } from "antd";
import PieChart from "../../../components/PieChart";
import Interval from "../../../components/IntervalChart";
import Form from "../../../components/Form";
import {AskLeave_Form} from "../../../configs/form";
import http from "../../../apis/axios";
import { askleave } from "../../../configs/port";
import storage from "../../../apis/storage";
import STORAGE from "../../../configs/storage";
export default function AskLeave() {
  const [piedata, setpiedata] = useState([]);
  const userInfo = storage.get({key:STORAGE.USER_INFO});
  useEffect(() => {
    const getData = async () => {
      let result = await http.post(askleave.data);
      setpiedata(result);
    };
    getData();
  }, []);
  const data = [
    {
      title: "假期状态图",
      content: <PieChart data={piedata} height={240}></PieChart>
    },
    {
      title: "请假类型分布图",
      content: <Interval data={piedata.slice(1)} row="item" col="count" height={220}></Interval>
    },
  ];
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
    <Fragment>
      <Row>
        <Col span={8}>
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>{item.content}</Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12} offset={2}>
          <Form style={{
            width: "100%",
            margin: "20px auto",
            border: "1px solid #26CB98",
            padding: "40px 20px",
            borderRadius: "16px",
            boxShadow: "0 0 6px 2px #0b8062",
            backgroundColor: "#fff"
          }} 
          option={AskLeave_Form(userInfo.name, userInfo.userId)} 
          submit={submit(askleave.form)}
          result={{
            slot: true,
            msg: "返回"
          }}></Form>
        </Col>
      </Row>
    </Fragment>
  );
}