/* eslint-disable react/prop-types */
import React  from "react";
import { Typography, Divider } from "antd";
import data from "../../../config/messageDetail";
const { Title, Paragraph } = Typography;
/**
 * 
 * @param {object} props 通过message路由传递过来的参数
 */
export default function Message(props) {
  const article = props.location.state;
  return (
    <Typography>
      <Title>{article.title}</Title>
      <Divider />
      <Paragraph style={{
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
      }}>
        {data.content}
      </Paragraph>
      <Divider />
    </Typography >
  );
}