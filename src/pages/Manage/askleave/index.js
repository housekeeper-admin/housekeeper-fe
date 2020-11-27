import React, { Fragment } from "react";
import { List, Descriptions,Space, Button,message } from "antd";
import data from "../../../config/askleave.manage";
export default function AskLeave() {
  function success({id=null,msg="成功"}) {
    message.success(msg + id);
  }
  return (
    <Fragment>
      <List
        itemLayout="horizontal"
        dataSource={data}
        bordered={true}
        style={{
          backgroundColor:"#fff",
          padding: "20px"
        }}
        renderItem={item => (
          <List.Item>
            <Descriptions
              bordered
              title={item.name}
              size="small"
              style={{
                width: "100%"
              }}
              extra={<Space>
                <Button type="primary" onClick={success.bind(this,{id:item.id,msg: "成功"})}>同意</Button>
                <Button type="primary" onClick={success.bind(this,{id:item.id,msg: "已拒绝"})} danger>拒绝</Button>
              </Space>}
            >
              <Descriptions.Item label="工号">{item.JobId}</Descriptions.Item>
              <Descriptions.Item label="部门">{item.department}</Descriptions.Item>
              <Descriptions.Item label="开始时间">{item.start}</Descriptions.Item>
              <Descriptions.Item label="原因">{item.reason_simple}</Descriptions.Item>
              <Descriptions.Item label="是否报销">{item.reimbursement?"是":"否"}</Descriptions.Item>
              <Descriptions.Item label="截止时间">{item.end}</Descriptions.Item>
              <Descriptions.Item label="原因详情">
                {item.reason_detail}
              </Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />
    </Fragment>
  );
}