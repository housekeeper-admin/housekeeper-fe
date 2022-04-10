import * as React from 'react';
import { message, Spin } from 'antd';
import BasicTable from 'components/Table';
import api from '@/services';

export default function Logistics() {
  const [logisticsData, setLogisticsData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const titleArr = ['部门编号', '服务类别', '联系电话', '部门地址'];
  const columns = [];

  /**
   *
   * @param {string} search
   */
  const getLogisticsData = async search => {
    try {
      setLoading(true);
      const result = (await api.logistics.getLogisticsList(search)) || [];
      setLogisticsData(result);
    } catch (error) {
      message.error('获取数据失败');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getLogisticsData();
  }, []);

  for (let item in logisticsData[0]) {
    columns.push({
      dataIndex: item,
    });
  }
  columns.map((item, index) => {
    item.title = titleArr[index];
    return item;
  });
  /**
   *
   * @param {string} value
   */
  const searchLogisticsData = value => {
    if (!value.trim()) {
      message.warn('搜索内容不能为空');
    }
    getLogisticsData(value);
  };
  return (
    <Spin spinning={loading}>
      <BasicTable
        data={logisticsData}
        columns={columns}
        search={searchLogisticsData}
        placeholder="搜索指定部门"
      />
    </Spin>
  );
}
