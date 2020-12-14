import React, { Fragment,useEffect,useState } from "react";
import CirclChart from "../../../components/CircleChart";
import LineChart from "../../../components/linChart";
import http from "../../../apis/axios";
import {wage} from "../../../configs/port";
import storage from "../../../apis/storage";
import STORAGE from "../../../configs/storage";
import { Card } from "antd";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};

export default function Wage() {
  const [current, setcurrent] = useState([]);
  const [history, sethistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await http.post(wage.info, {userId:storage.get({key:STORAGE.USER_INFO}).userId});
      setcurrent(result.current);
      sethistory(result.history);
    };
    fetchData();
  },[]);
  return (
    <Fragment>
      <Card title="工资详情">
        <Card.Grid style={gridStyle}>
          <CirclChart data={current} title="税后工资组成"></CirclChart>
        </Card.Grid>
        {
          current.map((item, index)=>(
            <Card.Grid style={gridStyle} key={index}>{item.type + ":" + item.value + "￥"}</Card.Grid>
          ))
        }
        <Card.Grid style={{width:"75%"}}>
          <span>年度工资详情</span>
          <LineChart data = {history} row="month" col="value" valueName="工资"></LineChart>
        </Card.Grid>
      </Card>
    </Fragment>
  );
}