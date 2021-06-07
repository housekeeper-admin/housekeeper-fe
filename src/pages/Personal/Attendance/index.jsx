import React, { useState, useEffect } from 'react';
import { Chart, Line, Point, Tooltip } from 'bizcharts';
import { Row, Col, Divider, Steps, List, PageHeader } from 'antd';
import Form from '../../../components/Form';
import { Reissue_Form } from '../../../configs/form';
import http from '../../../apis/axios';
import storage from '../../../apis/storage';
import STORAGE from '../../../storage/storage-key-map.config';
import { attendance } from '../../../configs/port';

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

export default function Attendance() {
  const [data, setdata] = useState([]);
  const [stepList, setstepList] = useState([]);
  const userInfo = storage.get({ key: STORAGE.USER_INFO }) || null;
  const submit = url => {
    const getData = async value => {
      value.time = value.time.valueOf();
      let res = await http.post(url, value);
      if (res) {
        return true;
      }
      return false;
    };
    return getData;
  };
  useEffect(() => {
    const getData = async () => {
      let data = (await http.post(attendance.data)) || [];
      let stepList = (await http.post(attendance.step)) || [];
      //TODO:在这里做补签流程的状态处理
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
      let start = data.map(item => {
        let date = new Date(Number(item.signin));
        return {
          time: date.getHours(),
          week: date.getDay(),
          type: 'start',
        };
      });
      let end = data.map(item => {
        let date = new Date(Number(item.signout + 8 * 60 * 60 * 1000));
        return {
          time: date.getHours(),
          week: date.getDay(),
          type: 'end',
        };
      });
      setstepList(stepList);
      setdata([...start, ...end]);
    };
    getData();
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
            option={Reissue_Form(userInfo?.name, userInfo?.userId)}
            submit={submit(attendance.form)}
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
}
