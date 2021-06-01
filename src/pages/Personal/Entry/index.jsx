import React, { useEffect, useState } from "react";
import StepPart from "../../../components/StepPage";
import OfferTemplate from "../../../middleware/OfferTemplate";
import { Update_UserInfo_Form, Update_Pass_Form } from "../../../configs/form";
import Form from "../../../components/Form";
import { useHistory } from "react-router-dom";
import http from "../../../apis/axios";
import {  userPort } from "../../../configs/port";
import storage from "../../../apis/storage";
import STORAGE from "../../../configs/storage";
/* 尚未解决多个ref的问题 */
export default function Entry() {
  const history = useHistory();
  const [stepStatus, setstepStatus] = useState([true, false, false]);
  const [offer, setoffer] = useState({});
  const userInfo = storage.get({ key: STORAGE.USER_INFO }) || null;
  const userId = userInfo?.userId,name = userInfo?.name;
  useEffect(() => {
    const getData = async () => {
      setoffer({
        name:storage.get(STORAGE.USER_INFO)?.name || ""
      });
    };
    getData();
  }, []);
  const callBack = () => {
    setTimeout(history.push("/center", 3000));
  };
  const submit = (url, index) => {
    const getData = async (value) => {
      let res = await http.post(url, value);
      if (res) {
        let arr = stepStatus;
        arr[index] = true;
        setstepStatus(arr);
        return true;
      }
      return false;
    };
    return getData;
  };
  return (
    <div style={{
      width: "80%",
      margin: "0 auto",
    }}>
      <StepPart
        stepStatus = {stepStatus}
        step1={OfferTemplate(offer)}
        step2={
          Form({
            name: "EntryConfirmation",
            style: {
              width: "60%",
              margin: "20px auto",
              border: "1px solid #26CB98",
              padding: "40px 20px",
              borderRadius: "16px",
              boxShadow: "0 0 6px 2px #0b8062"
            },
            option: Update_UserInfo_Form(name, userId),
            submit: submit(userPort.updateUserInfo,1),
          })}
        step3={Form({
          name: "UpdataPass",
          style: {
            width: "60%",
            margin: "20px auto",
            border: "1px solid #26CB98",
            padding: "40px 20px",
            borderRadius: "16px",
            boxShadow: "0 0 6px 2px #0b8062"
          },
          option: Update_Pass_Form(name, userId),
          submit: submit(userPort.updatePassword,2)
        })}
        success={{
          callBack: callBack,
          message: "您已完成全部信息，马上开始您的旅程吧~"
        }}
      ></StepPart>
    </div >
  );
}