import * as React from 'react';
import Item from './item';
import { List } from 'antd';
const ArticleList = () => {
  const [articleList, setArticleList] = React.useState([]);
  return (
    <List
      itemLayout="horizontal"
      dataSource={articleList}
      renderItem={item => <Item article={item} />}
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 4,
      }}
    />
  );
};

export default ArticleList;
