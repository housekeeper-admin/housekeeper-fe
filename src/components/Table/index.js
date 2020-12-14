import React, { Fragment, useState } from "react";
import { Table, Input, Pagination, Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { Search } = Input;
const { confirm } = Modal;
/**
 * 
 * @param {object | array} prop 传入需要在表格中渲染的参数
 * @param {object} option 表格的配置项
 */
export default function TablePage(prop = null) {
  const [current, setcurrent] = useState(0);
  const [successLoading, setSuccessloading] = useState(false);
  const [errorLoading, setRefuseloading] = useState(false);
  //默认选中的个数
  const [selectedRowKeys, setselectedRowKeys] = useState([]);
  /**
   * 搜索函数
   * @param {string} value 
   */
  const onSearch = value => { prop.search(value); };
  const pageSize = 8;
  const onChange = (page, pageSize) => {
    setcurrent((page - 1) * pageSize);
  };
  function showConfirm({ msg = "处理", code=true }) {
    confirm({
      title: `确认${msg}这些请求吗?`,
      icon: <ExclamationCircleOutlined />,
      content: "您的操作将不可取消",
      onOk() {
        if(prop.handle(selectedRowKeys, code)) {
          code?setSuccessloading(false):setRefuseloading(false);
          setselectedRowKeys([]);
        } else {
          message.error("服务器异常");
        }
      },
      onCancel() {
        code?setSuccessloading(false):setRefuseloading(false);
      },
    });
  }
  /**
   * 同意处理
   */
  const agree = () => {
    setSuccessloading(true);
    setTimeout(() => {
      showConfirm({ msg: "同意", code: true });
    }, 1000);
  };
  /**
   * 拒绝处理
   */
  const refuse = () => {
    setRefuseloading(true);
    // ajax request after empty completing
    setTimeout(() => {
      showConfirm({ msg: "拒绝",code: false });
    }, 1000);
  };
  for(let i = 0; i< prop.data.length; ++i) {
    prop.data[i].key = prop.data[i].id;
  }
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
          <Button type="primary" onClick={agree} disabled={!hasSelected} loading={successLoading}>
            提交
          </Button>
          <Button type="default" danger style={{ marginLeft: "20px" }} onClick={refuse} disabled={!hasSelected} loading={errorLoading}>
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
        rowSelection={prop.checkBox ? rowSelection : ""}
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
