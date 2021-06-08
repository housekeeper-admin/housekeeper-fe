import * as React from 'react';
import StepPart from '@/components/StepPage';
import OfferTemplate from '@/middleware/OfferTemplate';
import GlobalContext from '@/context';
import { Update_UserInfo_Form, Update_Pass_Form } from '@/configs/form';
import Form from '@/components/Form';
import { useHistory } from 'react-router-dom';
import { userPort } from '@/configs/port';
import { client } from '@/services';
/* 尚未解决多个ref的问题 */
const Entry = () => {
  const history = useHistory();
  const [stepStatus, setStepStatus] = React.useState([true, false, false]);
  const [offer, setOffer] = React.useState({});
  const { userInfo } = React.useContext(GlobalContext);
  const { username } = userInfo;
  const userId = userInfo?.userId,
    name = userInfo?.name;
  React.useEffect(() => {
    const getData = async () => {
      setOffer({
        name: username,
      });
    };
    getData();
  }, []);
  const callBack = () => {
    setTimeout(history.push('/center', 3000));
  };
  const submit = (url, index) => {
    const getData = async value => {
      let res = await client.post(url, value);
      if (res) {
        let arr = stepStatus;
        arr[index] = true;
        setStepStatus(arr);
        return true;
      }
      return false;
    };
    return getData;
  };
  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
      }}>
      <StepPart
        stepStatus={stepStatus}
        step1={OfferTemplate(offer)}
        step2={Form({
          name: 'EntryConfirmation',
          style: {
            width: '60%',
            margin: '20px auto',
            border: '1px solid #26CB98',
            padding: '40px 20px',
            borderRadius: '16px',
            boxShadow: '0 0 6px 2px #0b8062',
          },
          option: Update_UserInfo_Form(name, userId),
          submit: submit(userPort.updateUserInfo, 1),
        })}
        step3={Form({
          name: 'UpdataPass',
          style: {
            width: '60%',
            margin: '20px auto',
            border: '1px solid #26CB98',
            padding: '40px 20px',
            borderRadius: '16px',
            boxShadow: '0 0 6px 2px #0b8062',
          },
          option: Update_Pass_Form(name, userId),
          submit: submit(userPort.updatePassword, 2),
        })}
        success={{
          callBack: callBack,
          message: '您已完成全部信息，马上开始您的旅程吧~',
        }}></StepPart>
    </div>
  );
};

export default Entry;
