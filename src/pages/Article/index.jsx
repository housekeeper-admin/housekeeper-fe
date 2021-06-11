/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Typography, Divider, message, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import api from '@/services';
import moment from 'moment';
import './style.less';
const { Title, Text } = Typography;
/**
 * 文章展示页
 * @param {object} props 通过message路由传递过来的参数
 */
const Article = props => {
  const article = {
    title: '',
    time: Date.now(),
    content: '',
  };
  const { articleId } = useParams();
  const [articleDetail, setArticleDetail] = useState(article);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await api.article.getArticleDetail(articleId);
      result.time = moment(Number(result.time)).format('YYYY-MM-DD hh:mm');
      setArticleDetail(result);
    } catch (error) {
      message.error('获取文章详情失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [articleId]);
  return (
    <Typography className="article-card">
      <Spin spinning={loading}>
        <Title>{articleDetail.title}</Title>
        <Text keyboard>{articleDetail.time}</Text>
        <Divider />
        <div
          dangerouslySetInnerHTML={{
            __html: articleDetail.content,
          }}
        />
      </Spin>
    </Typography>
  );
};

export default Article;
