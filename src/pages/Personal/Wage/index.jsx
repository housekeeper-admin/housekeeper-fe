import * as React from 'react';
import CircleChart from 'components/chart/circle-chart';
import LineChart from 'components/chart/line-chart';
import api from '@/services';
import GlobalContext from '@/context';
import { Card, message } from 'antd';
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const Wage = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const { userId, username } = userInfo;
  const [history, setHistory] = React.useState([]);
  const [current, setCurrent] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const history = await api.wage.getWageHistory(userId);
        history.map(item => {
          let month = new Date(Number(item.time));
          item.month = month.getMonth();
          item.value = item.money;
        });
        const temp = [];
        for (const item in history[0]) {
          let t = {};
          if (item === 'basepay') {
            t.type = '基本工资';
            t.value = history[0][item];
            temp.push(t);
          } else if (item === 'allowance') {
            t.type = '补助';
            t.value = history[0][item];
            temp.push(t);
          } else if (item === 'reward') {
            t.type = '奖金';
            t.value = history[0][item];
            temp.push(t);
          }
        }
        setHistory(history);
        setCurrent(temp);
      } catch (error) {
        message.error('获取历史工资信息失败');
      }
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Card title="工资详情">
        <Card.Grid style={gridStyle}>
          <CircleChart data={current} title="税后工资组成"></CircleChart>
        </Card.Grid>
        {current.map((item, index) => (
          <Card.Grid style={gridStyle} key={index}>
            {item.type + ':' + item.value + '￥'}
          </Card.Grid>
        ))}
        <Card.Grid style={{ width: '75%' }}>
          <span>年度工资详情</span>
          <LineChart data={history} row="month" col="value" valueName="工资"></LineChart>
        </Card.Grid>
      </Card>
    </React.Fragment>
  );
};

export default Wage;
