import React, { Fragment } from "react";
import { List, Card, Row, Col } from "antd";
import PieChart from "../../../components/PieChart/index";
import Interval from "../../../components/IntervalChart/index";
import pieData from "../../../config/pieChart.askLeave";
import BasicForm from "../../../components/Form/index";
import FormOption from "../../../config/askforleave.form";
const data = [
  {
    title: "假期状态图",
    content: <PieChart data={pieData} height={240}></PieChart>
  },
  {
    title: "请假类型分布图",
    content: <Interval data={pieData.slice(1)} row="item" col="count" height={220}></Interval>
  },
];
export default function AskLeave() {
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
          <BasicForm style={{
            width: "100%",
            margin: "20px auto",
            border: "1px solid #26CB98",
            padding: "40px 20px",
            borderRadius: "16px",
            boxShadow: "0 0 6px 2px #0b8062",
            backgroundColor: "#fff"
          }} 
          option={FormOption("王勇", "ngs12467")} 
          result={{
            slot: true,
            msg: "返回"
          }}></BasicForm>
        </Col>
      </Row>
    </Fragment>
  );
}