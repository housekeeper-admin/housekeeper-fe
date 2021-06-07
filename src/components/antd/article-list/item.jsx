import React from 'react';
import UserAvatar from 'components/antd/user-avatar';
import { useHistory } from 'react-router-dom';
import hooks from '@/storage';
import { List, Button } from 'antd';

const ArticleItem = List.Item;

const Item = props => {
  const { article } = props;
  const { title, userId } = article;
  const history = useHistory();
  const handleMore = item => {
    history.push({
      pathname: `/article/${item.txtId}`,
      state: item,
    });
    hooks.useArticleStorage(item);
  };
  return (
    <ArticleItem
      actions={[
        <Button key={article.txtId} onClick={handleMore}>
          查看全文
        </Button>,
      ]}>
      <ArticleItem.Meta avatar={<UserAvatar userId={userId} />} title={title} />
    </ArticleItem>
  );
};

export default Item;
