import React, { Fragment,useEffect, useState} from "react";
import BasicTable from "../../components/Table";
import http from "../../apis/axios";
import {logistics} from "../../configs/port";
export default function Logistics() {
  const [data, setdata] = useState([]);
  const titleArr = ["部门编号", "服务类别", "联系电话", "部门地址"];
  const columns = [];

  useEffect(() => {
    const fetchData = async () => {
      let result = await http.post(logistics.list);
      setdata(result);
    };
    fetchData();
  }, []);

  for (let item in data[0]) {
    columns.push({
      dataIndex: item
    });
  }
  columns.map((item,index) => {
    item.title = titleArr[index];
    return item;
  });
  function search(value) {
    const fetchData = async () => {
      let result = await http.post(logistics.list, {search:value});
      setdata(result);
    };
    fetchData();
  }
  return (
    <Fragment>
      <BasicTable data={data} columns={columns} search={search} placeholder="搜索指定部门" />
    </Fragment>
  );
}