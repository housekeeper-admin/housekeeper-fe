import React, { Fragment } from "react";
import { List, Descriptions, Space, Button, message } from "antd";
import data from "../../../mock/resign.manage";
export default function AskLeave() {
  function success({ id = null, msg = "成功" }) {
    message.success(msg + id);
  }
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
        renderItem={item => (
          <List.Item style={{
            boxShadow: "0px 0px 4px #aaa"
          }}>
            <Descriptions
              title={item.name}
              size="small"
              style={{
                width: "100%",
              }}
              extra={<Space>
                <Button type="primary" onClick={success.bind(this, { id: item.id, msg: "成功" })}>同意</Button>
                <Button type="primary" onClick={success.bind(this, { id: item.id, msg: "已拒绝" })} danger>拒绝</Button>
              </Space>}
            >
              <Descriptions.Item label="工号">{item.JobId}</Descriptions.Item>
              <Descriptions.Item label="部门">{item.department}</Descriptions.Item>
              <Descriptions.Item label="职位">{item.position}</Descriptions.Item>
              <Descriptions.Item label="原因">{item.type}</Descriptions.Item>
              <Descriptions.Item label="是否找到下家">{item.reimbursement ? "是" : "否"}</Descriptions.Item>
              <Descriptions.Item label="未来规划">{item.future}</Descriptions.Item>
              <Descriptions.Item label="原因详情">
                {item.reason}
              </Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />
    </Fragment>
  );
}