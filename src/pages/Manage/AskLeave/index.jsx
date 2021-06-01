import React, { Fragment, useEffect, useState } from "react";
import { List, Descriptions, Space, Button, message } from "antd";
import http from "../../../apis/axios";
import { askleave } from "../../../configs/port";
import format from "../../../utils/format";
export default function AskLeave() {
  async function success({ id = null, code = true, msg = "成功" }) {
    if (await http.post(askleave.handle, {
      vacationId: id,
      code: code
    })) {
      message.success(msg);
    } else {
      message.warn(false);
    }
  }
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await http.post(askleave.list) || [];
      data.map(item => {
        item.start = format(Number(item.starttime));
        item.end = format(Number(item.endtime));
      });
      setdata(data);
    };
    getData();
  }, []);
  return (
    <Fragment>
      <List
        itemLayout="horizontal"
        dataSource={data}
        bordered={true}
        style={{
          backgroundColor: "#fff",
          padding: "20px"
        }}
        renderItem={(item,index) => (
          <List.Item>
            <Descriptions
              bordered
              title={item.name}
              size="small"
              style={{
                width: "100%"
              }}
              extra={
                <Space>
                  <Button type="primary" onClick={success.bind(this, { id: item.vacationId,index:index, code: 1, msg: "成功" })}>同意</Button>
                  <Button type="primary" onClick={success.bind(this, { id: item.vacationId,index:index, code: 0, msg: "已拒绝" })} danger>拒绝</Button>
                </Space>
              }
            >
              <Descriptions.Item label="工号">{item.vuid}</Descriptions.Item>
              <Descriptions.Item label="姓名">{item.username}</Descriptions.Item>
              <Descriptions.Item label="开始时间">{item.start}</Descriptions.Item>
              <Descriptions.Item label="类型">{item.type}</Descriptions.Item>
              <Descriptions.Item label="截止时间">{item.end}</Descriptions.Item>
              <Descriptions.Item label="原因详情">
                {item.cause}
              </Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />
    </Fragment>
  );
}