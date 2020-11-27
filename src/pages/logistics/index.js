import React, { Fragment } from "react";
import BasicTable from "../../components/Table/index";
import data from "../../config/logisitics";
export default function Logistics() {
  const titleArr = ["部门编号", "服务类别", "联系电话", "部门地址"];
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

  return (
    <Fragment>
      <BasicTable data={data} columns={columns} placeholder="搜索指定部门" />
    </Fragment>
  );
}