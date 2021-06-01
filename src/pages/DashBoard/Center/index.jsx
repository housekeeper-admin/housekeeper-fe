/* 个人中心主页面 */
import React, { Fragment, useEffect, useState } from "react";
import { Card, Row, Col, Carousel } from "antd";
import MessageList from "../../../components/MessageList";
import appList from "../../../configs/card";
import http from "../../../apis/axios";
import { article } from "../../../configs/port";
import { Link } from "react-router-dom";
import "./index.less";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};
function onChange() {
  // console.log(a, b, c);
}
const contentStyle = {
  height: "60vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Center() {
  const [list, setlist] = useState([]);
  const swiperList = [
    {
      id: "1",
      url: "/img/1.jpg"
    },
    {
      id: "2",
      url: "/img/2.jpg"
    },
    {
      id: "3",
      url: "/img/3.jpg"
    },
    {
      id: "4",
      url: "/img/4.jpg"
    }
  ];
  useEffect(() => {
    const fetchData = async () => {
      let result = await http.post(article.list) || [];
      setlist(result);
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="常用应用" className="card-left">
            {
              appList.map((item, i) => (
                <Link key={i} to={item.link}>
                  <Card.Grid style={gridStyle} flag={item.flag}>
                    {item.avatar}
                    <p>{item.name}</p>
                  </Card.Grid>
                </Link>
              ))
            }
          </Card>
          <Card title="每日精选" className="card-left" style={{ marginTop: "20px" }}>
            <MessageList list={list}></MessageList>
          </Card>
        </Col>
        <Col span={12} style={{ height: "100%" }}>
          <Carousel afterChange={onChange} autoplay={true}>
            {
              swiperList.map((item, index) => (
                <div key={item.id || index}>
                  <img style={contentStyle} src={item.url} alt={index} srcSet="" />
                </div>
              ))
            }
          </Carousel>
        </Col>
      </Row>
    </Fragment>
  );
}