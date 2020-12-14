import { Result, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
export default function NoMatch() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="您的页面走丢了"
      extra={<Button type="primary">
        <Link to={"/center"}>Back Home</Link>
      </Button>}
    />
  );
}