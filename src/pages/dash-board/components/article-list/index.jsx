import * as React from 'react';
import { List, message, Spin, Card } from 'antd';
import api from '@/services';
import Item from './item';

/**
 * 获取精选文章列表
 */
const ArticleList = () => {
  const [articleList, setArticleList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getArticleList = async () => {
    try {
      setLoading(true);
      const result = await api.article.getArticleList();
      setArticleList(result);
    } catch (error) {
      message.error('获取文章列表失败');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getArticleList();
  }, []);

  return (
    <Spin spinning={loading}>
      <Card
        title="每日精选"
        className="card-left"
        style={{
          marginTop: '20px',
        }}>
        <List
          itemLayout="horizontal"
          dataSource={articleList}
          renderItem={item => <Item article={item} />}
          pagination={{
            pageSize: 4,
          }}
        />
      </Card>
    </Spin>
  );
};

export default ArticleList;
