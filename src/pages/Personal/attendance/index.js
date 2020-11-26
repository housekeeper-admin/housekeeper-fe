import React from "react";
import { Chart, Line, Point, Tooltip } from "bizcharts";
import { Row, Col, Divider } from "antd";
import data from "../../../config/personalAttendance";
const scale = {
  time: { min: 6, max: 24, tickCount: 9, },
  type: {
    formatter: v => {
      return {
        start: "上班打卡时间",
        end: "下班打卡时间"
      }[v];
    }
  }
};

export default function Attendance() {
  return (
    <div style={{
      padding: "10px 15px"
    }}>
      <Row gutter={24}>
        <Col className="gutter-row" span={12} style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "2px 2px 4px 2px #aaa"
        }}>
          <Divider orientation="left">
            考勤动态图
          </Divider>
          <Chart scale={scale} padding={[30, 20, 50, 40]} autoFit height={360} data={data} interactions={["element-active"]}>
            <Point position="week*time" color="type" shape='circle' />
            <Line shape="smooth" position="week*time" color="type" label="时间/h" />
            <Tooltip shared showCrosshairs />
          </Chart>
        </Col>
        <Col className="gutter-row" span={12}>
          <div >col-6</div>
        </Col>
      </Row>
    </div>
  );
}