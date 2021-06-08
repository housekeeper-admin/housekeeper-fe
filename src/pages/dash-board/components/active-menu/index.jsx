import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { InteractionTwoTone, PrinterTwoTone, MailTwoTone, FundTwoTone } from '@ant-design/icons';
import GlobalContext from '@/context';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const getMenuList = userInfo => {
  const { userId, departmentId } = userInfo;
  return [
    {
      name: '修改个人信息',
      avatar: <InteractionTwoTone />,
      link: `/personal/${userId}/update`,
    },
    {
      name: '薪资查询',
      avatar: <FundTwoTone />,
      link: `/personal/${userId}/wage`,
    },
    {
      name: '考勤查询',
      avatar: <PrinterTwoTone />,
      link: `/personal/${userId}/${departmentId}/attendance`,
    },
    {
      name: '请假申请',
      avatar: <MailTwoTone />,
      link: `/personal/${userId}/${departmentId}/askleave`,
    },
  ];
};

const ActiveMenu = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const MenuList = getMenuList(userInfo);
  return (
    <Card title="常用应用" className="card-left">
      {MenuList.map((item, i) => (
        <Link key={i} to={item.link}>
          <Card.Grid style={gridStyle}>
            {item.avatar}
            <p>{item.name}</p>
          </Card.Grid>
        </Link>
      ))}
    </Card>
  );
};
export default ActiveMenu;
