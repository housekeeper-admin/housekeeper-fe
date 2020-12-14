import React, { Fragment, useState, useEffect } from "react";
import Table from "../../../components/Table";
import { attendance } from "../../../configs/port";
import http from "../../../apis/axios";
export default function Attendance() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await http.post(attendance.list) || [];
      setdata(data);
    };
    getData();
  }, []);
  /**
   * 搜索函数
   * @param {string} value 
   */
  const search = async (value) => {
    let data = await http.post(attendance.list, {
      search: value
    }) || [];
    setdata(data);
  };
  /**
   * 处理选中项
   * @param {array} arr 
   */
  const handleSelect = async (arr, code) => {
    let res = await http.post(attendance.handle, {
      arr: arr,
      code: code
    });
    return res;
  };
  const titleArr = ["id", "姓名", "工号", "部门", "原因", "时间", "状态"];
  const columns = [];
  for (let item in data[0]) {
    columns.push({
      dataIndex: item
    });
  }
  
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
        handle = {handleSelect}
      ></Table>
    </Fragment>
  );
}