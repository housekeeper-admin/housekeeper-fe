import React, { Fragment, useEffect, useState } from 'react';
import { List, Descriptions, Space, Button, message } from 'antd';
import moment from 'moment';
import api from '@/services';

const AskLeave = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const getAskleaveList = async () => {
    const result = (await api.askleave.getAskLeaveProgressList()) || [];
    result.map(item => {
      item.start = moment(Number(item.starttime)).format('YYYY-MM-DD hh:mm');
      item.end = moment(Number(item.endtime)).format('YYYY-MM-DD hh:mm');
    });
    setData(result);
  };
  const handleProgress = async ({ id, enable = false }) => {
    try {
      setLoading(true);
      await api.askleave.handleAskLeaveProgress({
        id,
        enable,
      });
      message.success('处理成功啦');
    } catch (error) {
      message.error('处理失败，请稍后试试吧');
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getAskleaveList();
  }, []);
  return (
    <Fragment>
      <List
        itemLayout="horizontal"
        dataSource={data}
        bordered={true}
        style={{
          backgroundColor: '#fff',
          padding: '20px',
        }}
        renderItem={(item, index) => (
          <List.Item>
            <Descriptions
              bordered
              title={item.name}
              size="small"
              style={{
                width: '100%',
              }}
              extra={
                <Space>
                  <Button
                    type="primary"
                    loading={loading}
                    onClick={() =>
                      handleProgress({
                        id: item.vacationId,
                        enable: 1,
                      })
                    }>
                    同意
                  </Button>
                  <Button
                    type="primary"
                    loading={loading}
                    onClick={() =>
                      handleProgress({
                        id: item.vacationId,
                        enable: 0,
                      })
                    }
                    danger>
                    拒绝
                  </Button>
                </Space>
              }>
              <Descriptions.Item label="工号">{item.vuid}</Descriptions.Item>
              <Descriptions.Item label="姓名">{item.username}</Descriptions.Item>
              <Descriptions.Item label="开始时间">{item.start}</Descriptions.Item>
              <Descriptions.Item label="类型">{item.type}</Descriptions.Item>
              <Descriptions.Item label="截止时间">{item.end}</Descriptions.Item>
              <Descriptions.Item label="原因详情">{item.cause}</Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />
    </Fragment>
  );
};

export default AskLeave;
