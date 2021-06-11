import * as React from 'react';
import { Steps, List, PageHeader, message, Typography, Space, Tag, Tooltip } from 'antd';
import api from '@/services';
import moment from 'moment';
import '../style.less';

const { Text } = Typography;
const { Step } = Steps;

const CauseTypeColor = {
  其他: 'cyan',
  未登录补签: 'blue',
  月底补签: 'orange',
  出差: 'lime ',
};

const ReissueStepList = () => {
  const [stepList, setStepList] = React.useState([]);

  const getAttendanceData = async () => {
    try {
      const res = await api.attendance.getAttendanceSteps();
      const stepList = res.map(item => {
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
        //获取原因类型
        const sliceIndex = item.cause.indexOf(':');
        if (sliceIndex > 0 && sliceIndex < 5) {
          item.causeType = item.cause.slice(0, sliceIndex);
        } else {
          item.causeType = '其他';
        }
        item.steps = stepTemple;
        item.time = moment(Number(item.csignin)).format('YYYY-MM-DD HH:mm');
        return item;
      });
      setStepList(stepList);
    } catch (error) {
      message.error('获取签到数据失败');
    }
  };
  React.useEffect(() => {
    getAttendanceData();
  }, []);
  return (
    <React.Fragment>
      <PageHeader
        className="site-page-header"
        title="补签卡申请记录"
        subTitle="(仅展示最近一周的记录)"
      />
      <List
        itemLayout="horizontal"
        className="reissue-step"
        dataSource={stepList}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <Space>
              <Tooltip
                title={
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 14,
                      lineHeight: 1.75,
                      letterSpacing: 1,
                    }}
                    strong>
                    {item.cause}
                  </Text>
                }>
                <div
                  style={{
                    minWidth: 200,
                  }}>
                  <Tag
                    color={CauseTypeColor[item.causeType]}
                    style={{
                      width: 76,
                      textAlign: 'center',
                    }}>
                    {item.causeType}
                  </Tag>
                  <Text strong>{item.time}</Text>
                </div>
              </Tooltip>
              <Steps
                style={{
                  width: 800,
                }}
                current={item.current}
                status={item.status}>
                {item.steps.map((step, stepIndex) => (
                  <Step title={step.title} key={stepIndex} />
                ))}
              </Steps>
            </Space>
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default ReissueStepList;
