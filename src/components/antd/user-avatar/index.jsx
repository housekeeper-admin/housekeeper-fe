import * as React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import GlobalContext from '@/context';
import { Popover } from 'antd';
import UserDescription from './user-description';
import './style.less';

const AuthColor = ['#f56a00', '#02a9f7', '#06f0c9', '#a70eff'];

const GENDER = {
  男: {
    sex: 'man',
    hairStyle: 'thick',
  },
  女: {
    sex: 'woman',
    hairStyle: 'womanLong',
  },
};

const UserAvatar = props => {
  const propUserId = props.userId;
  const { userInfo } = React.useContext(GlobalContext);
  const { sex, departmentId } = userInfo;
  const [visible, setVisible] = React.useState(false);
  const config = genConfig({
    ...GENDER[sex],
    faceColor: '#F9C9B6',
    hairColor: 'black',
    bgColor: AuthColor[departmentId % 4],
  });
  return (
    <React.Fragment>
      <Popover
        content={<UserDescription userInfo={userInfo} />}
        trigger="hover"
        visible={visible}
        onVisibleChange={() => setVisible(!visible)}>
        <div className="avatar-out-box">
          <Avatar
            {...config}
            className="user-avatar"
            onClick={() => setVisible(!visible)}
            style={{
              width: '3.6rem',
              height: '3.6rem',
            }}
          />
        </div>
      </Popover>
    </React.Fragment>
  );
};

export default UserAvatar;
