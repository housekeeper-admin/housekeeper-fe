import React, { Fragment, useState, useEffect } from 'react';
import Table from 'components/Table';
import { attendance } from '../../../configs/port';
import http from '../../../apis/axios';
import format from '../../../utils/format';
import storage from '../../../apis/storage';
import STORAGE from '../../../storage/storage-key-map.config';
import { message } from 'antd';
export default function Attendance() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = (await http.post(attendance.list)) || [];
      let res = data.map(item => {
        return {
          id: item.mendId,
          userId: item.userId,
          username: item.username,
          cause: item.cause,
          time: format(Number(item.csignin)),
        };
      });
      setdata(res);
    };
    getData();
  }, []);
  /**
   * 搜索函数
   * @param {string} value
   */
  const search = async value => {
    let data =
      (await http.post(attendance.list, {
        search: value,
      })) || [];
    setdata(data);
  };
  /**
   * 处理选中项
   * @param {array} arr
   */
  const handleSelect = async (arr, code) => {
    let res = await http.post(attendance.handle, {
      arr: arr.toString(),
      code: code ? 1 : 2,
      username: storage.get({ key: STORAGE.USER_INFO }).name,
    });
    if (res) {
      return res;
    } else {
      message.warn('修改失败');
    }
  };
  const titleArr = ['id', '工号', '姓名', '原因', '时间'];
  const columns = [];

  for (let item in data[0]) {
    columns.push({
      dataIndex: item,
    });
  }
  console.log(columns);
  columns.map((item, index) => {
    item.title = titleArr[index];
    return item;
  });
  return (
    <Fragment>
      <Table
        columns={columns}
        search={search}
        placeholder="搜索指定人员(以工号查询)"
        checkBox={true}
        data={data}
        handle={handleSelect}></Table>
    </Fragment>
  );
}
