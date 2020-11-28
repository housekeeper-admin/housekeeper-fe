import React, { Fragment } from "react";
import BasicTable from "../../../components/Table/index";
import data from  "../../../mock/askleave.manage";
export default function Attendance() {
  const titleArr = ["id", "姓名", "工号", "部门","原因","时间","状态"];
  const columns = [];
  for (let item in data[0]) {
    columns.push({
      dataIndex: item
    });
  }
  columns.map((item,index) => {
    item.title = titleArr[index];
    return item;
  });
  return(
    <Fragment>
      <BasicTable columns ={columns} placeholder="搜索指定人员(以工号查询)" checkBox={true}  data = {data} ></BasicTable>
    </Fragment>
  ); 
}