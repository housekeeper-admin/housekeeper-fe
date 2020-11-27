import React, { Fragment } from "react";
import { List, Card, Row, Col } from "antd";
import PieChart from  "../../../components/PieChart/index";
import Interval from "../../../components/IntervalChart/index";
import pieData from "../../../config/pieChart.askLeave";
const data = [
  {
    title: "假期状态图",
    content: <PieChart data = {pieData}></PieChart>
  },
  {
    title: "请假类型分布图",
    content: <Interval data = {pieData.slice(1)} row = "item"  col="count"></Interval>
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
        <Col span={8} offset={2}>
          col-8
      </Col>
      </Row>
    </Fragment>
  );
}