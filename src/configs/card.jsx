import { InteractionTwoTone, PrinterTwoTone, MailTwoTone, FundTwoTone } from '@ant-design/icons';
import _ from 'lodash';
import React from 'react';
const appList = [
  {
    name: '考勤管理',
    avatar: <InteractionTwoTone />,
    flag: 1,
    link: '/manage/attendance',
  },
  {
    name: '薪资查询',
    avatar: <FundTwoTone />,
    flag: 1,
    link: '/personal/wage',
  },
  {
    name: '考勤查询',
    avatar: <PrinterTwoTone />,
    flag: 1,
    link: '/personal/attendance',
  },
  {
    name: '请假申请',
    avatar: <MailTwoTone />,
    flag: 1,
    link: '/personal/askleave',
  },
];

export default appList;
