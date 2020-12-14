/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Typography, Divider } from "antd";
import http from "../../apis/axios";
import {article} from "../../configs/port";
import "./index.less";
import STORAGE from "../../configs/storage";
import storage from "../../apis/storage";
const { Title, Text } = Typography;
/**
 * 
 * @param {object} props 通过message路由传递过来的参数
 */
export default function Message(props) {
  let prop = props.location.state;
  let local = storage.get({key:STORAGE.ARTICLE});
  const [articleDetail, setarticle] = useState(props.location.state);
  useEffect(() => {
    const fetchData = async () => {
      let result = await http.post(article.detail, {id:prop?.id || local.id });
      console.log("res",result);
      setarticle(result);
    };
    fetchData();
  }, []);
  console.log(articleDetail);
  return (
    <Typography className="article-card">
      <Title>{articleDetail?.title || local.title}</Title>
      <Text keyboard>{articleDetail?.time || local.time}</Text>
      <Divider />
      <div dangerouslySetInnerHTML = {{__html:articleDetail?.content}}></div>
    </Typography >
  );
}