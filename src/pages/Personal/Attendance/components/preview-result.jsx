import * as React from 'react';
import moment from 'moment';
import { Modal, Descriptions, Typography, Tag } from 'antd';
import UserModalTitle from '@/components/user-modal-title';
import { initDefaultFormValue, ReissueTypeOptions } from './reissue-form';
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
const PreviewResult = (props, ref) => {
  const { submit, visible, setVisible } = props;
  const [loading, setLoading] = React.useState(false);
  const [previewData, setPreviewData] = React.useState({});
  const { type, cause, time } = previewData;
  React.useImperativeHandle(
    ref,
    () => ({
      setPreviewData,
      setLoading,
    }),
    [visible]
  );
  const { userInfo } = React.useContext(GlobalContext);
  const { userId, username } = userInfo;
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
        <Item label="补签日期">{moment(time).format('YYYY-MM-DD HH:mm')}</Item>
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

export default React.forwardRef(PreviewResult);
