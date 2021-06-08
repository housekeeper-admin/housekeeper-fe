import React, { Fragment, useState } from 'react';
import { Modal, PageHeader, Button, Space } from 'antd';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { useHistory } from 'react-router-dom';
import api from '@/services';
import STG from '@/storage';
import _ from 'lodash';
export default function Communication() {
  const localData = STG.storage.get({ key: STG.STORAGE_KEY_MAP.ARTICLE }) || '';
  const [content, setContent] = useState(BraftEditor.createEditorState(localData));
  const [title, setTitle] = useState('未命名');
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('请确认这是您本人的操作！');
  const [callBack, setcallBack] = useState({
    func: () => {
      console.log('ok!');
    },
  });
  //key:"CurrentPage"代表存储在浏览器缓存中的数据
  /**
   * 当内容改变的时候执行
   * @param {string} content 文档的内容
   */
  const handleChange = content => {
    let node = JSON.parse(content.toRAW());
    setTitle(node ? (node.blocks[0].text === '' ? '未命名' : node.blocks[0].text) : '未命名');
    setContent(content.toHTML());
  };
  const history = useHistory();

  const handleHTMLChange = html => {
    console.log(html);
  };
  /**
   * 展示对话框
   */
  const showModal = () => {
    setVisible(true);
  };
  /**
   * 关闭model
   */
  const handleOk = async () => {
    setConfirmLoading(true);
    await callBack.func();
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 3000);
  };
  /**
   * 取消操作
   */
  const handleCancel = () => {
    setVisible(false);
  };
  /**
   * 保存输入的内容
   *
   */
  const handleToSave = () => {
    showModal();
    setModalText('您的文章将保存在您的浏览器缓存，在清除缓存前请备份您的信息！');
    setcallBack({
      func: () => {
        Promise.resolve(STG.storage.set({ key: STG.STORAGE_KEY_MAP.ARTICLE, value: content }));
      },
    });
    //TODO:添加请求函数在数据库存储临时数据
  };
  /**
   * 发布文章
   */
  const handleToSubmit = () => {
    showModal();
    setModalText('您的文章将提交并被审核！');
    setcallBack({
      func: async () => {
        const res = await api.article.newArticle({
          title: title,
          content: content,
        });
        if (res) return res;
        return false;
      },
    });
    //TODO:向后台发送文章
  };
  const editorProps = {
    value: content,
    onChange: _.throttle(handleChange, 1000),
    onHTMLChange: handleHTMLChange,
    placeholder: '写点有趣的东西吧~',
  };
  return (
    <Fragment>
      <PageHeader
        className="site-page-header"
        onBack={() => history.push('/center')}
        title={title}
        subTitle={STG.storage.get({ key: STG.STORAGE_KEY_MAP.USER_INFO })?.name || '游客'}
        style={{
          border: '1px solid #000',
          marginBottom: '6px',
        }}
      />
      <BraftEditor
        style={{
          border: '1px solid #000',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '2px 2px 3px #aaa',
          minHeight: '600px',
        }}
        {...editorProps}
      />
      <Space
        style={{
          margin: '10px 20px',
        }}>
        <Button size="large" onClick={handleToSave}>
          保存
        </Button>
        <Button type="primary" size="large" onClick={handleToSubmit}>
          发布
        </Button>
        <Modal
          title="提示"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}>
          <p>{modalText}</p>
        </Modal>
      </Space>
    </Fragment>
  );
}
