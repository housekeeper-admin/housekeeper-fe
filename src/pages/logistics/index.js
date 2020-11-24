import React, { Fragment } from "react";
import { Table, Tag, Space } from "antd";
import data from "../../config/logisitics";
const { Column, ColumnGroup } = Table;
export default function Logistics() {
  return (
    <Fragment>
      <Table dataSource={data}>
        <Column title="Name">
        </Column>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </Fragment>
  );
}