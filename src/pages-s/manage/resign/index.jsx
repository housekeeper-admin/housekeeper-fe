import React, { Fragment, useState, useEffect } from 'react';
import { List, Descriptions, Space, Button, message } from 'antd';
import api from '@/services';

const AskLeave = () => {
  const [resignList, setResignList] = useState([]);
  const getResignList = async () => {
    try {
      const res = (await api.resign.getResignList()) || [];
      setResignList(res);
    } catch (error) {
      message.error('获取离职信息表失败');
    }
  };
  const handleResignProgress = async ({ id, status }) => {
    try {
      const res = await api.resign.handleResignProgress({
        id: id,
        status: status,
      });
    } catch (error) {
      message.error('处理离职信息失败');
    }
  };
  useEffect(() => {
    getResignList();
  }, []);
  return (
    <Fragment>
      <List
        itemLayout="horizontal"
        dataSource={resignList}
        bordered={true}
        style={{
          backgroundColor: '#fff',
          padding: '20px',
        }}
        renderItem={item => (
          <List.Item
            style={{
              boxShadow: '0px 0px 4px #aaa',
            }}>
            <Descriptions
              title={item.username}
              size="small"
              style={{
                width: '100%',
              }}
              extra={
                <Space>
                  <Button
                    type="primary"
                    onClick={() =>
                      handleResignProgress({
                        id: item.leaveId,
                        status: 1,
                      })
                    }>
                    同意
                  </Button>
                  <Button
                    type="primary"
                    onClick={() =>
                      handleResignProgress({
                        id: item.leaveId,
                        status: 0,
                      })
                    }
                    danger>
                    拒绝
                  </Button>
                </Space>
              }>
              <Descriptions.Item label="工号">{item.userId}</Descriptions.Item>
              <Descriptions.Item label="部门">{item.departmentId}</Descriptions.Item>
              <Descriptions.Item label="职位">{item.post}</Descriptions.Item>
              <Descriptions.Item label="原因">{item.type}</Descriptions.Item>
              <Descriptions.Item label="原因详情">{item.cause}</Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />
    </Fragment>
  );
};

export default AskLeave;
