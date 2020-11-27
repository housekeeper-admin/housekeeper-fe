import React, { Fragment, useState } from "react";
import { Table, Input, Pagination, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { Search } = Input;
const { confirm } = Modal;
/**
 * 
 * @param {object | array} prop 传入需要在表格中渲染的参数
 * @param {object} option 表格的配置项
 */
export default function BasicTable(prop = null) {
  const onSearch = value => console.log(value);
  const [current, setcurrent] = useState(0);
  const [successLoading, setSuccessloading] = useState(false);
  const [errorLoading, setErrorloading] = useState(false);
  //默认选中的个数
  const [selectedRowKeys, setselectedRowKeys] = useState([]);
  const pageSize = 8;
  const onChange = (page, pageSize) => {
    setcurrent((page - 1) * pageSize);
  };
  function showConfirm({msg= "处理"}) {
    confirm({
      title: `确认${msg}这些请求吗?`,
      icon: <ExclamationCircleOutlined />,
      content: "您的操作将不可取消",
      onOk() {
        //TODO:在这里进行数据的请求和提交
        //TODO:提交后刷新当前页面
        console.log("确认");
      },
      onCancel() {
        console.log("取消");
      },
    });
  }
  /**
   * 开始加载数据
   */
  const start = () => {
    //TODO:在这里进行数据的请求和提交
    //TODO:提交后刷新当前页面
    setSuccessloading(true);
    console.log(selectedRowKeys);
    // ajax request after empty completing
    setTimeout(() => {
      showConfirm({msg: "同意"});
      setSuccessloading(false);
      setselectedRowKeys([]);
    }, 1000);
  };
  const refuse = () => {
    //TODO:在这里进行数据的请求和提交
    //TODO:提交后刷新当前页面
    setErrorloading(true);
    console.log(selectedRowKeys);
    // ajax request after empty completing
    setTimeout(() => {
      showConfirm({msg: "拒绝"});
      setErrorloading(false);
      setselectedRowKeys([]);
    }, 1000);
  };
  /**
   * 
   * @param {boolean} selectedRowKeys 改变选中的状态
   */
  const onSelectChange = selectedRowKeys => {
    setselectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  prop = prop ? prop : { columns: [], data: [] };
  return (
    <Fragment>
      {
        prop.checkBox ? <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={start} disabled={!hasSelected} loading={successLoading}>
            提交
          </Button>
          <Button type="default" danger style={{marginLeft: "20px"}} onClick={refuse} disabled={!hasSelected} loading={errorLoading}>
            拒绝
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `已选择${selectedRowKeys.length} 个` : ""}
          </span>
        </div> : ""
      }
      <Table
        columns={prop.columns}
        dataSource={prop.data.slice(current, current + pageSize)}
        rowSelection={prop.checkBox?rowSelection:""}
        bordered
        pagination={false}
        option={prop.option}
        title={() => (<Search
          placeholder={prop.placeholder || "请输入所要查找的信息"}
          allowClear
          enterButton="Search"
          size="middle"
          style={{
            width: "40%"
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