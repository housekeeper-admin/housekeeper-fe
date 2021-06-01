import { Steps, Button, message } from "antd";
import React, { Fragment } from "react";
import throttle from "../../utils/throttle";
const { Step } = Steps;


export default function StepPage(prop) {
  const [current, setCurrent] = React.useState(0);
  const steps = [
    {
      title: "确认入职信息",
      content: prop.step1,
    },
    {
      title: "填写个人信息",
      content: prop.step2,
    },
    {
      title: "输入个人登录密码",
      content: prop.step3,
    },
  ];
  //TODO:在这里加入对应的防抖节流
  const next = () => {
    if (prop.stepStatus[current]) {
      setCurrent(current + 1);
    } else {
      message.warn("请完成当前表单");
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <Fragment>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action" style={{
        textAlign: "center"
      }}>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            上一步
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={throttle(next,5000)}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => {
            if (prop.stepStatus[steps.length - 1]) {
              prop.success.callBack();
              return message.success(prop.success.message);
            } else {
              return message.warn("请完成最后一步");
            }
          }}>
            完成
          </Button>
        )}
      </div>
    </Fragment>
  );
}