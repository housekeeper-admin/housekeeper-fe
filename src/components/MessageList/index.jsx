import { List, Avatar, Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import storage from '../../apis/storage';
import STORAGE from '../../storage/storage-key-map.config';
export default function MessageList(prop) {
  const history = useHistory();
  /**
   * 获取消息详情
   * @param {object} item
   */
  function handleMore(item) {
    history.push({ pathname: `/article/${item.txtId}`, state: item });
    storage.set({ key: STORAGE.ARTICLE, value: item });
  }
  return (
    <List
      itemLayout="horizontal"
      dataSource={prop.list}
      renderItem={item => (
        <List.Item
          actions={[
            <Button key="list-loadmore-more" onClick={handleMore.bind(this, item)}>
              more
            </Button>,
          ]}>
          <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={item.title} />
        </List.Item>
      )}
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 4,
      }}></List>
  );
}
