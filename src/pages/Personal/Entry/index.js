import React from "react";
import StepPart from "../../../components/StepPage/index";
import offer from "../../../mock/offer";
import step2_formOption from "../../../config/Form/entry.form";
import step3_formOption from "../../../config/Form/entry.updatepass.form";
import form from "../../../components/Form/index";
import { useHistory } from "react-router-dom";
export default function Entry() {
  const history = useHistory();
  const callBack = () =>{
    setTimeout(history.push("/home/center", 3000));
  };
  return (
    <div style={{
      width: "80%",
      margin: "0 auto",
    }}>
      <StepPart
        step1={offer({
          name: "Lucy",
          company: "管家婆",
          department: "技术部",
          position: "后台开发实习生",
          time: 3,
          start: {
            year: 2020,
            month: 12,
            day: 10,
            hour: 14
          },
          end: {
            year: 2020,
            month: 12,
            day: 10,
            hour: 14
          },
          hr: "杨航",
          address: "陕西省西安市长安区西安邮电大学东区安悦北2531管家婆",
          tel: "1575454517"
        })}
        step2={form({
          name: "EntryConfirmation",
          style: {
            width: "60%",
            margin: "20px auto",
            border: "1px solid #26CB98",
            padding: "40px 20px",
            borderRadius: "16px",
            boxShadow: "0 0 6px 2px #0b8062"
          },
          option: step2_formOption("王勇","ng12451")
        })}
        step3={form({
          name: "UpdataPass",
          style: {
            width: "60%",
            margin: "20px auto",
            border: "1px solid #26CB98",
            padding: "40px 20px",
            borderRadius: "16px",
            boxShadow: "0 0 6px 2px #0b8062"
          },
          option: step3_formOption("王勇","ng12451")
        })}
        success= {{
          callBack:callBack,
          message:"您已完成全部信息，马上开始您的旅程吧~"
        }}
      ></StepPart>
    </div>
  );
}