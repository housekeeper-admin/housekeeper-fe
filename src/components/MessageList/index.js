import { List, Avatar, Button } from "antd";
import React from "react";
import list from "../../mock/article.list";
import { DeleteFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
export default function MessageList() {
  const history = useHistory();
  function handleDelete(id) {
    console.log(id);
  }
  /**
   * 获取消息详情
   * @param {object} item 
   */
  function handleMore(item) {
    console.log(item.id + "more");
    React.$storage.set({key:"mesage-router",value: item });
    history.push({pathname:`/home/detail/message/${item.id}`,state:item});
  }
  return (
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={item => (
        <List.Item
          actions={
            [
              <Button type="primary" danger key="list-loadmore-edit" onClick={handleDelete.bind(this,item.id)} ><DeleteFilled /></Button>,
              <Button key="list-loadmore-more" onClick={handleMore.bind(this,item)}>more</Button>
            ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.detail.slice(0, 35) + "……"}
          />
        </List.Item>
      )}
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 4,
      }}
    >
    </List>
  );
}