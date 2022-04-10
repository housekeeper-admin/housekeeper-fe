import * as React from 'react';
import { List, Card, Row, Col, message } from 'antd';
import PieChart from 'components/chart/pie-chart';
import IntervalChart from 'components/chart/interval-chart';
import AskleaveForm from './components/askleave-form';
import api from '@/services';
import GlobalContext from '@/context';
import './style.less';

const AskLeave = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const [pieData, setPieData] = React.useState([]);
  const getAskLeavePieData = async () => {
    try {
      const result = (await api.askleave.getAskLeaveDateData()) || [];
      let sumTime = 0;
      const res = result
        .map(item => {
          const temp = {
            item: item.type || '私人原因',
            count: Math.floor(Number(item.time) / 24 / 60 / 60 / 1000) || 0,
          };
          sumTime += temp.count;
          return temp;
        })
        .map(item => ({
          ...item,
          percent: (item.count / sumTime).toFixed(2) * 1,
        }));
      setPieData(res);
    } catch (error) {
      console.error(error);
      message.error('获取请假展示图失败');
    }
  };
  React.useEffect(() => {
    getAskLeavePieData();
  }, []);
  const data = [
    {
      title: '假期状态图',
      content: <PieChart data={pieData} height={240} />,
    },
    {
      title: '请假类型分布图',
      content: <IntervalChart data={pieData} row="item" col="count" height={220} />,
    },
  ];
  return (
    <Row>
      <Col span={8}>
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>{item.content}</Card>
            </List.Item>
          )}
        />
      </Col>
      <Col span={12} offset={2}>
        <AskleaveForm />
      </Col>
    </Row>
  );
};

export default AskLeave;
