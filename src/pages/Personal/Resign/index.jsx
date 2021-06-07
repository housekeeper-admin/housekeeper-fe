import React, { Fragment } from 'react';
import { Row, Col, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;
import Form from '../../../components/Form';
import { Resign_Form } from '../../../configs/form';
import http from '../../../apis/axios';
import { resign } from '../../../configs/port';
import storage from '../../../apis/storage';
import STORAGE from '../../../storage/storage-key-map.config';
export default function Resign() {
  const userInfo = storage.get({ key: STORAGE.USER_INFO }) || null;
  const submit = url => {
    const getData = async value => {
      console.log(value);
      let res = await http.post(url, value);
      if (res) {
        return true;
      }
      return false;
    };
    return getData;
  };
  return (
    <Fragment>
      <Row>
        <Col
          span={10}
          style={{
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '8px 0 0 8px',
            boxShadow: '1px 1px 4px 1px #aaa',
          }}>
          <Typography>
            <Title>最后的挽留</Title>
            <Paragraph>
              当得知你由于诸多的原因不得不选择离开公司时，我们心里有一种说不清的感受——是遗憾，是惋惜，是祝福?我想三者都有!
            </Paragraph>
            <Paragraph>
              做为一名员工，你从一名普通员工成长为一名称职的基层管理人员和优秀员工，
              这里面有企业为你创造的条件和机会，更有你自己辛勤的努力和付出。
              为什么能从一名普通员工成长为优秀员工? 正如你说的那样：“
              <Text mark>每天都想着把每一件事做好，认真关注每一个细节</Text>”，承担责任，
              默默地为企业奉献。
              <Text strong>
                在此，我代表公司向你致以诚挚的谢意!感谢你对企业的认可和信赖!
                感谢你对企业的忠诚和敬业!感谢你为企业付出的辛劳和汗水!感谢你让自己的青春在公司闪光!
              </Text>
              。
            </Paragraph>
            <Paragraph>
              优秀员工是企业的财富，企业是优秀员工温暖的家。
              当你选择离开而又依依不舍时，对公司来说是一件遗憾的事。
              做为hr，我感到很惋惜，但是天下没有不散的筵席，我衷心的祝福你：祝你家庭和睦、健康幸福!
              希望你把优秀员工的精神带到新的地方，把公司的精神带到新的地方，在新的起点上让自己的青春继续闪光!
              同时记住：你曾经为之付出辛劳的公司，是你永远的娘家!有空常回家看看!
            </Paragraph>
            <Paragraph>
              <Text keyboard>管家婆人力资源部</Text>
            </Paragraph>
          </Typography>
        </Col>
        <Col span={14}>
          <Form
            style={{
              width: '100%',
              border: '1px solid #26CB98',
              padding: '10px',
              borderRadius: '16px',
              backgroundColor: '#fff',
              boxShadow: '0 0 2px 2px #0b8062',
            }}
            submit={submit(resign.form)}
            option={Resign_Form(userInfo?.name, userInfo?.userId)}></Form>
        </Col>
      </Row>
    </Fragment>
  );
}
