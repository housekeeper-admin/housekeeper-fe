import * as React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import UserAvatar from '@/components/user-avatar';

const ArticleItem = List.Item;

const Item = props => {
  const { article } = props;
  const { title, userId, txtId } = article;
  return (
    <ArticleItem
      actions={[
        <Link key={article.txtId} to={`/article/${txtId}`}>
          查看全文
        </Link>,
      ]}>
      <ArticleItem.Meta
        avatar={
          <UserAvatar
            userId={userId}
            style={{
              width: 2.4,
              height: 2.4,
            }}
          />
        }
        title={title}
      />
    </ArticleItem>
  );
};

export default Item;
