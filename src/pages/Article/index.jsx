/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Typography, Divider } from "antd";
import http from "../../apis/axios";
import {article} from "../../configs/port";
import "./index.less";
import STORAGE from "../../configs/storage";
import storage from "../../apis/storage";
import format from "../../utils/format";
const { Title, Text } = Typography;
/**
 * 
 * @param {object} props 通过message路由传递过来的参数
 */
export default function Message(props) {
  const prop = props.location.state;
  const local = storage.get({key:STORAGE.ARTICLE}) || null;
  const [articleDetail, setArticleDetail] = useState(props.location.state);
  useEffect(() => {
    const fetchData = async () => {
      let result = await http.post(article.detail, {txtId:prop?.txtId || local?.id }) || {};
      setArticleDetail(result);
    };
    fetchData();
  }, []);
  console.log(articleDetail);
  return (
    <Typography className="article-card">
      <Title>{articleDetail?.title || local?.title}</Title>
      <Text keyboard>{format(Number(articleDetail?.time || local?.time))}</Text>
      <Divider />
      <div dangerouslySetInnerHTML = {{__html:articleDetail?.content}}></div>
    </Typography >
  );
}