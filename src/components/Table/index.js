import React, { Fragment,useState } from "react";
import { Table, Input,Pagination } from "antd";
const { Search } = Input;
/**
 * 
 * @param {object | array} prop 传入需要在表格中渲染的参数
 * @param {object} option 表格的配置项
 */
export default function BasicTable(prop = null) {
  const onSearch = value => console.log(value);
  const [current, setcurrent] = useState(0);
  const pageSize = 8;
  const onChange = (page, pageSize) => {
    setcurrent((page-1) * pageSize);
  };
  prop = prop ? prop : { columns: [], data: [] };
  return (
    <Fragment>
      <Table
        columns={prop.columns}
        dataSource={prop.data.slice(current,current + pageSize)}
        bordered
        pagination={false}
        option={prop.option}
        title={() => (<Search
          placeholder="输入搜索的部门信息"
          allowClear
          enterButton="Search"
          size="middle"
          style={{
            width:"40%"
          }}
          onSearch={onSearch}
        />)}
        footer={() => (
          <Pagination defaultCurrent={1} onChange={onChange} total={prop.data.length} defaultPageSize={pageSize} hideOnSinglePage={true} />
        )}
      />
    </Fragment>
  );
}