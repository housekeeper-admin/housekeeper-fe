import React, { useState } from 'react';
import { Upload, message, Card, Image, Modal } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import format from '../../utils/format';
const gridStyle = {
  width: '10%',
  textAlign: 'center',
};
const { Dragger } = Upload;
const tabListNoTitle = [
  {
    key: 'personal',
    tab: '个人',
  },
  {
    key: 'group',
    tab: '团队',
  },
  {
    key: 'company',
    tab: '企业公共',
  },
];
const props = {
  name: 'file',
  accept: 'image/*',
  action: 'http://192.168.1.133:8081/Company01_war_exploded/home/personal/updateFileName',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default function FileUpload() {
  //TODO:选项卡片变化时路由的变化，这里需要加入axios请求或者筛选函数
  const onTabChange = key => {
    setnoTitleKey(key);
    setfileList([]);
  };
  const [fileList, setfileList] = useState([
    {
      name: 'logo',
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      time: format(),
    },
    {
      name: 'logo',
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      time: format(),
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  //TODO:useEffect初始化进行http请求
  const [noTitleKey, setnoTitleKey] = useState('app');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="file-upload">
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={noTitleKey}
        onTabChange={key => {
          onTabChange(key, 'noTitleKey');
        }}>
        {fileList.map((item, index) => (
          <Card.Grid style={gridStyle} key={index} onClick={showModal}>
            <Image src={item.src} preview={false} />
          </Card.Grid>
        ))}
      </Card>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or
          other band files
        </p>
      </Dragger>
    </div>
  );
}
