/* eslint-disable react/prop-types */
import React  from "react";
import { Typography, Divider } from "antd";
import data from "../../../config/messageDetail";
import format from "../../../utils/format";
const { Title, Paragraph,Text } = Typography;
/**
 * 
 * @param {object} props 通过message路由传递过来的参数
 */
export default function Message(props) {
  console.log(props);
  const article = props.location.state || React.$storage.get({key:"mesage-router"});
  return (
    <Typography>
      <Title>{article.title}</Title>
      <Text keyboard>{format("YYYY-mm-dd HH:MM", data.time)}</Text>
      <Divider />
      <Paragraph style={{
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
      }}>
        {data.content}
      </Paragraph>
    </Typography >
  );
}