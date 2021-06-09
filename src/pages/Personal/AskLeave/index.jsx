import * as React from 'react';
import { List, Card, Row, Col, message } from 'antd';
import PieChart from 'components/chart/pie-chart';
import IntervalChart from 'components/chart/interval-chart';
import Form from 'components/Form';
import api from '@/services';
import GlobalContext from '@/context';
import './style.less';
import { AskLeave_Form } from '../../../configs/form';

const AskLeave = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const { userId, username } = userInfo;
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
        })
        .map(item => ({
          ...item,
          percent: (item.count / sumTime).toFixed(2),
        }));
      setPieData(res);
    } catch (error) {
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
  const submit = () => {
    const getData = async value => {
      try {
        const res = await api.askleave.newAskLeaveProgress({
          type: value.type,
          cause: value.cause,
          time: value.reissueTime,
        });
      } catch (error) {
        message.error('提交请假流程失败');
      }
    };
    return getData;
  };
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
        <Form
          style={{
            width: '100%',
            margin: '20px auto',
            border: '1px solid #26CB98',
            padding: '40px 20px',
            borderRadius: '16px',
            boxShadow: '0 0 6px 2px #0b8062',
            backgroundColor: '#fff',
          }}
          option={AskLeave_Form(username, userId)}
          submit={submit()}
          result={{
            slot: true,
            msg: '返回',
          }}></Form>
      </Col>
    </Row>
  );
};

export default AskLeave;
