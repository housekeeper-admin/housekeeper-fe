import { Result, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
export default function NoAuth() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="您没有权限访问本页面"
      extra={<Button type="primary">
        <Link to={"/home/center"}>Back Home</Link>
      </Button>}
    />
  );
}