import React, { Fragment } from "react";
import { Card, Row, Col, Carousel } from "antd";
import MessageList from "../../components/MessageList";
import appList from "../../config/card";
import "./index.less";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};
function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  minHeight: "72vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Personal() {
  return (
    <Fragment>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="常用应用" className="card-left">
            {
              appList.map((item, i) => (
                <Card.Grid style={gridStyle} key={i} flag={item.flag}>
                  {item.avatar}
                  <p>{item.name}</p>
                </Card.Grid>
              ))
            }
          </Card>
          <Card title="每日精选" className="card-left" style={{marginTop: "20px"}}>
            <MessageList></MessageList>
          </Card>
        </Col>
        <Col span={12} style={{height: "100%"}}>
          <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </Fragment>
  );
}