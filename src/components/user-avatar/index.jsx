import * as React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import GlobalContext from '@/context';
import { Popover } from 'antd';
import api from '@/services';
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
  const [currentUserInfo, setCurrentUserInfo] = React.useState(userInfo);
  const [avatarConfig, setAvatarConfig] = React.useState({
    ...GENDER[sex],
    faceColor: '#F9C9B6',
    hairColor: 'black',
    bgColor: AuthColor[departmentId % 4],
  });
  const [visible, setVisible] = React.useState(false);
  const config = genConfig(avatarConfig);

  const getUserInfo = async id => {
    const res = await api.user.getUserInfoById(id);
    setCurrentUserInfo(res);
    setAvatarConfig({
      ...avatarConfig,
      ...GENDER[sex],
      bgColor: AuthColor[departmentId % 4],
    });
  };

  React.useEffect(() => {
    if (propUserId && userInfo.userId !== propUserId) {
      getUserInfo(propUserId);
    }
  }, [propUserId, userInfo]);

  return (
    <React.Fragment>
      <Popover
        content={<UserDescription userInfo={currentUserInfo} />}
        trigger="click"
        visible={visible}
        onVisibleChange={() => setVisible(!visible)}>
        <div className="avatar-out-box">
          <Avatar
            {...config}
            className="user-avatar"
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
