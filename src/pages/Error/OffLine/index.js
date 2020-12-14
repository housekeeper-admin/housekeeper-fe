import { Result, Spin } from "antd";
import React from "react";
export default function OffLine() {
  return (
    <Result
      status="warning"
      title="您的网络断开了，请检查您的网络连接"
      extra={
        <Spin size="large" />
      }
    />
  );
}