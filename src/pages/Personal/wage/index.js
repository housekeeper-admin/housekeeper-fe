import React, { Fragment } from "react";
import CirclChart from "../../../components/CircleChart/index";
import CurrentData from "../../../mock/wage.circlechart";
import LineChart from "../../../components/linChart/index";
import historyData from "../../../mock/wage.lineChart";
import { Card } from "antd";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};

export default function Wage() {
  return (
    <Fragment>
      <Card title="工资详情">
        <Card.Grid style={gridStyle}>
          <CirclChart data={CurrentData} title="税后工资组成"></CirclChart>
        </Card.Grid>
        {
          CurrentData.map((item, index)=>(
            <Card.Grid style={gridStyle} key={index}>{item.type + ":" + item.value + "￥"}</Card.Grid>
          ))
        }
        <Card.Grid style={{width:"75%"}}>
          <span>年度工资详情</span>
          <LineChart data = {historyData} row="month" col="value" valueName="工资"></LineChart>
        </Card.Grid>
      </Card>
    </Fragment>
  );
}