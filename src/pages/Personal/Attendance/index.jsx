import React, { useState, useEffect } from 'react';
import { Chart, Line, Point, Tooltip } from 'bizcharts';
import { Row, Col, Divider, Steps, List, PageHeader, message } from 'antd';
import GlobalContext from '@/context';
import api from '@/services';
import Form from '@/components/Form';
import { Reissue_Form } from '@/configs/form';

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
  const submit = () => {
    const getData = async value => {
      try {
        const res = await api.attendance.newAttendanceProgressInfo(value);
      } catch (error) {
        message.error('提交补签请求失败');
      }
    };
    return getData;
  };
  const getAttendanceData = async () => {
    try {
      const data = await api.attendance.getAttendanceProgressData();
      const stepList = await api.attendance.getAttendanceSteps();
      stepList.map(item => {
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
      setStepList(stepList);
      setData([...start, ...end]);
    } catch (error) {
      message.error('获取签到数据失败');
    }
  };
  useEffect(() => {
    getAttendanceData();
  }, []);
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
            borderRadius: '0 12px 12px 0',
            boxShadow: '0px 2px 4px 2px #69c0ff',
            padding: '60px 20px',
          }}>
          <Form
            option={Reissue_Form(userInfo.name, userInfo.userId)}
            submit={submit()}
            result={{
              slot: true,
              msg: '返回',
            }}></Form>
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
          <PageHeader
            className="site-page-header"
            title="补签卡申请记录"
            subTitle="(仅展示最近一周的记录)"
          />
          <List
            itemLayout="horizontal"
            dataSource={stepList}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Steps current={item.current} status={item.status}>
                  {item.steps.map((item, index) => (
                    <Step title={item.title} key={index} />
                  ))}
                </Steps>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Attendance;
