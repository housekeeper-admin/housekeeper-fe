import * as React from 'react';
import { Modal, Descriptions, Typography, Tag } from 'antd';
import UserModalTitle from '@/components/user-modal-title';
import GlobalContext from '@/context';

const Item = Descriptions.Item;
const { Paragraph, Text } = Typography;

/**
 *
 * @param {object} props
 * @param {function} props.submit
 * @param {object} props.previewData
 * @param {boolean} props.visible
 * @param {boolean} props.loading
 * @param {function} props.setVisible
 */
const PreviewResult = props => {
  const { userInfo } = React.useContext(GlobalContext);
  const { userId, username } = userInfo;
  const { submit, previewData, visible, loading, setVisible } = props;
  const { type, cause, time } = previewData;
  return (
    <Modal
      visible={visible}
      style={{
        width: 360,
      }}
      confirmLoading={loading}
      onCancel={() => setVisible(false)}
      onOk={submit}
      title={<UserModalTitle title="补签预览卡" />}>
      <Descriptions
        bordered
        column={1}
        labelStyle={{
          width: 100,
          padding: '8px 12px',
        }}
        contentStyle={{
          padding: '8px 12px',
        }}>
        <Item label="姓名">{username}</Item>
        <Item label="工号">{userId}</Item>
        <Item label="补签日期">{time.format('YYYY-MM-DD HH:mm')}</Item>
        <Item label="补签原因">
          <Typography>
            <Paragraph>
              <Tag color="geekblue">{type}</Tag>
            </Paragraph>
            <Paragraph>
              <Text>{cause}</Text>
            </Paragraph>
          </Typography>
        </Item>
      </Descriptions>
    </Modal>
  );
};

export default PreviewResult;
