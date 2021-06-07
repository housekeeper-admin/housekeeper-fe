/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Typography, Divider, message } from 'antd';
import api from '@/services';
import STG from '@/storage';
import './index.less';
import format from '../../utils/format';
const { Title, Text } = Typography;
/**
 *
 * @param {object} props 通过message路由传递过来的参数
 */
export default function Message(props) {
  const article = props.location.state;
  const local =
    STG.storage.get({
      key: STG.STORAGE_KEY_MAP.ARTICLE,
    }) || null;
  const [articleDetail, setArticleDetail] = useState(article);
  const fetchData = async () => {
    try {
      const result = await api.article.getArticleDetail(article.txtId || local.id);
      setArticleDetail(result);
    } catch (error) {
      message.error('获取文章详情失败');
    }
  };

  useEffect(() => {
    fetchData();
  }, [article]);
  console.log(articleDetail);
  return (
    <Typography className="article-card">
      <Title>{articleDetail?.title || local?.title}</Title>
      <Text keyboard>{format(Number(articleDetail?.time || local?.time))}</Text>
      <Divider />
      <div dangerouslySetInnerHTML={{ __html: articleDetail?.content }}></div>
    </Typography>
  );
}
