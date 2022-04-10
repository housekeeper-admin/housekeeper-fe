import * as React from 'react';
import Table from '@/components/Table';
import api from '@/services';
import moment from 'moment';
import GlobalContext from '@/context';
import { message } from 'antd';

export default function Attendance() {
  const [data, setData] = React.useState([]);
  const { userInfo } = React.useContext(GlobalContext);
  const getAttendanceList = async search => {
    try {
      const res = (await api.attendance.getAttendanceList(search)) || [];
      const list = res.map(item => {
        return {
          id: item.mendId,
          userId: item.userId,
          username: item.username,
          cause: item.cause,
          time: moment(Number(item.csignin)).format('YYYY-MM-DD hh:mm'),
        };
      });
      setData(list);
    } catch (error) {
      message.error('获取签到列表失败');
    }
  };

  React.useEffect(() => {
    getAttendanceList();
  }, []);
  /**
   * 处理选中项
   * @param {array} arr
   */
  const handleSelect = async (arr, code) => {
    try {
      await api.attendance.handleAttendanceProgress({
        handlePersonList: arr,
        status: code ? 1 : 2,
        username: userInfo.username,
      });
      message.success('处理成功');
    } catch (error) {
      message.error('处理补签请求失败');
    }
  };
  const titleArr = ['id', '工号', '姓名', '原因', '时间'];
  const columns = [];

  for (let item in data[0]) {
    columns.push({
      dataIndex: item,
    });
  }
  columns.map((item, index) => {
    item.title = titleArr[index];
    return item;
  });
  return (
    <React.Fragment>
      <Table
        columns={columns}
        search={getAttendanceList}
        placeholder="搜索指定人员(以工号查询)"
        checkBox={true}
        data={data}
        handle={handleSelect}></Table>
    </React.Fragment>
  );
}
