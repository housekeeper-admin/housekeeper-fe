import React, { Fragment, useEffect, useState } from "react";
import CircleChart from 'components/chart/circle-chart';
import LineChart from 'components/chart/line-chart';
import http from "../../../apis/axios";
import { wage } from "../../../configs/port";
import storage from "../../../apis/storage";
import STORAGE from "../../../configs/storage";
import { Card } from "antd";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};

export default function Wage() {
  const [history, sethistory] = useState([]);
  const [current, setcurrent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let history = await http.post(wage.history, { userId: storage.get({ key: STORAGE.USER_INFO })?.userId }) || [];
      history.map(item => {
        let month = new Date(Number(item.time));
        item.month = month.getMonth();
        item.value = item.money;
      });
      let temp = [];
      for (const item in history[0]) {
        let t = {};
        if (item === "basepay") {
          t.type = "基本工资";
          t.value = history[0][item];
          temp.push(t);
        } else if (item === "allowance") {
          t.type = "补助";
          t.value = history[0][item];
          temp.push(t);
        } else if (item === "reward") {
          t.type = "奖金";
          t.value = history[0][item];
          temp.push(t);
        }
      }
      sethistory(history);
      setcurrent(temp);
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <Card title="工资详情">
        <Card.Grid style={gridStyle}>
          <CircleChart data={current} title="税后工资组成"></CircleChart>
        </Card.Grid>
        {
          current.map((item, index) => (
            <Card.Grid style={gridStyle} key={index}>{item.type + ":" + item.value + "￥"}</Card.Grid>
          ))
        }
        <Card.Grid style={{ width: "75%" }}>
          <span>年度工资详情</span>
          <LineChart data={history} row="month" col="value" valueName="工资"></LineChart>
        </Card.Grid>
      </Card>
    </Fragment>
  );
}