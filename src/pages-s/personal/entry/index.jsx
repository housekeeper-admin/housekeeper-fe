import * as React from 'react';
import StepPart from '@/components/StepPage';
import GlobalContext from '@/context';
import OfferEmail from './components/offer-email';
import UpdatePassword from '@/pages/personal/update-info/components/update-password';
import UpdateInfo from '@/pages/personal/update-info/components/update-info';
import { useHistory } from 'react-router-dom';

const Entry = () => {
  const history = useHistory();
  const [stepStatus, setStepStatus] = React.useState([true, false, false]);
  const [offer, setOffer] = React.useState({});
  const { userInfo } = React.useContext(GlobalContext);
  const { username, userId, authority } = userInfo;
  React.useEffect(() => {
    const getData = async () => {
      setOffer({
        name: username,
      });
    };
    getData();
  }, []);
  const callBack = () => {
    setTimeout(history.push(`/center/${userId}/${authority}`, 3000));
  };
  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
      }}>
      <StepPart
        stepStatus={stepStatus}
        step1={<OfferEmail {...offer} />}
        step2={
          <UpdateInfo
            setStepStatus={setStepStatus}
            style={{
              width: '60%',
              margin: '20px auto',
              border: '1px solid #26CB98',
              padding: '40px 20px',
              borderRadius: '16px',
              boxShadow: '0 0 6px 2px #0b8062',
            }}
          />
        }
        step3={
          <UpdatePassword
            setStepStatus={setStepStatus}
            style={{
              width: '60%',
              margin: '20px auto',
              border: '1px solid #26CB98',
              padding: '40px 20px',
              borderRadius: '16px',
              boxShadow: '0 0 6px 2px #0b8062',
            }}
          />
        }
        success={{
          callBack: callBack,
          message: '您已完成全部信息，马上开始您的旅程吧~',
        }}></StepPart>
    </div>
  );
};

export default Entry;
