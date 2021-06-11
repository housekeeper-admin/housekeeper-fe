import * as React from 'react';
import { Chart, Line, Point, Tooltip } from 'bizcharts';
import { Row, Col, Divider, Steps, List, PageHeader, message } from 'antd';
import GlobalContext from '@/context';
import api from '@/services';
import ReissueForm from './components/reissue-form';
import ReissueStepList from './components/reissue-step-list';
import './style.less';

const { Step } = Steps;
const scale = {
  time: { min: 6, max: 24, tickCount: 9 },
  type: {
    formatter: v => {
      return {
        start: '上班打卡时间',
        end: '下班打卡时间',
      }[v];
    },
  },
};

const Attendance = () => {
  const [data, setData] = React.useState([]);
  const [stepList, setStepList] = React.useState([]);
  const { userInfo } = React.useContext(GlobalContext);
  const { userId } = userInfo;
  const getAttendanceData = async () => {
    try {
      const data = await api.attendance.getAttendanceProgressData();
      const stepList = await api.attendance.getAttendanceSteps();
      const steps = stepList.map(item => {
        const stepTemple = [
          {
            title: '提交成功',
          },
          {
            title: '主管',
          },
          {
            title: '完成',
          },
        ];
        if (item.type === 1) {
          stepTemple[1].title += '同意';
          item.status = 'finish';
          item.current = 2;
        } else if (item.type === 2) {
          stepTemple[1].title += '拒绝';
          stepTemple[2].title = '失败';
          item.status = 'error';
          item.current = 1;
        } else {
          stepTemple[1].title += '审批中';
          stepTemple[2].title = '等待中';
          item.status = 'wait';
          item.current = 1;
        }
        item.steps = stepTemple;
        return item;
      });
      const start = data.map(item => {
        let date = new Date(Number(item.signin));
        return {
          time: date.getHours(),
          week: date.getDay(),
          type: 'start',
        };
      });
      const end = data.map(item => {
        let date = new Date(Number(item.signout + 8 * 60 * 60 * 1000));
        return {
          time: date.getHours(),
          week: date.getDay(),
          type: 'end',
        };
      });
      setStepList(steps);
      setData([...start, ...end]);
    } catch (error) {
      message.error('获取签到数据失败');
    }
  };
  React.useEffect(() => {
    getAttendanceData();
  }, [userId]);
  return (
    <div
      style={{
        padding: '10px 15px',
      }}>
      <Row gutter={24}>
        <Col
          className="gutter-row"
          span={12}
          offset={2}
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px 0 0 12px',
            boxShadow: '0px 2px 4px 2px #69c0ff',
          }}>
          <Divider orientation="left">考勤动态图</Divider>
          <Chart
            scale={scale}
            padding={[30, 20, 50, 40]}
            autoFit
            height={360}
            data={data}
            interactions={['element-active']}>
            <Point position="week*time" color="type" shape="circle" />
            <Line shape="smooth" position="week*time" color="type" label="时间/h" />
            <Tooltip shared showCrosshairs />
          </Chart>
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            backgroundColor: '#fff',
            height: 416,
            borderRadius: '0 12px 12px 0',
            boxShadow: '0px 2px 4px 2px #69c0ff',
            padding: '40px 20px',
            overflowY: 'scroll',
          }}>
          <ReissueForm />
        </Col>
      </Row>
      <Row>
        <Col
          span={20}
          offset={2}
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px 0 0 12px',
            boxShadow: '0px 2px 4px 2px #69c0ff',
            padding: '20px',
            marginTop: '30px',
          }}>
          <ReissueStepList stepList={stepList} />
        </Col>
      </Row>
    </div>
  );
};

export default Attendance;
