import { Typography, Divider } from "antd";
import React from "react";
const { Title, Paragraph, Text, Link } = Typography;
export default function ({
  name = "Lucy",
  company = "管家婆",
  department = "技术部",
  position = "后台开发实习生",
  time=3,
  start = {
    year: 2020,
    month: 12,
    day: 10,
    hour: 14
  },
  end = {
    year: 2020,
    month: 12,
    day: 10,
    hour: 14
  },
  hr="杨航",
  address = "陕西省西安市长安区西安邮电大学东区安悦北2531管家婆",
  tel= "1575454517"
}) {
  /* const content = `
  ${name}先生/女士：

    非常荣幸的通知您，由于您出众的专业能力和优秀的综合素质，已经通过公司的面试考核，成为公司的一员。

    您将入职公司${department}部门担任${position}职位，我们对您加入${company}大家庭表示热烈的欢迎！

    一、请你于${start.year}年${start.month}月${start.day}日${start.hour}时 ，到位于${address}公司人力资源部办理报到手续。

    二、请您在办理入职手续时，提供以下资料：

    1.居民身份证原件，外地户籍还需提供居住证原件；

    2.最高学历证书及学位证原件；

    3.专业技术职称证书原件、职业资格证书原件、上岗证书原件；

    4.前一家公司离职证明原件；

    5.招商银行储蓄卡（用于工资发放）；

    6.最近三个月三甲医院体检证明；

    7.个人近期1吋蓝底免冠照8张（用于档案资料、工作牌、劳动合同等办理）；

    8.请保证提供以上资料的真实性和可靠性。

    三、您在公司的薪资福利待遇，将按公司相关制度及岗位薪酬等级标准规定执行。

    具体薪资金额，由公司人事部另行通知。

    四、该职位试用期为3个月月，试用期满通过考核合格后转正。

    五、本入职通知有效期${end.year}年${end.month}月${end.day}日，超过时间未办理报到手续，视为自动放弃。

    七、请将本邮件打印出来，并在签名地方签字，报到时请携带该通知作为办理入职手续依据。

    八、如有疑问，请与公司人力资源部XX联系，联系电话${tel}。

    ${company}公司人力资源部 

    ${start.year}年${start.month}月${start.day}日
      `; */
  const content =
    <Typography style={{
      backgroundColor:"#fff",
      padding:"20px 60px",
      width: "60%",
      margin: "20px auto",
      borderRadius: "10px",
      boxShadow: "4px 4px 4px 2px #aaa"
    }}>
      <Title style={{
        textAlign: "center"
      }} >{company}入职通知函</Title>
      <Divider />
      <Title level={2}>{name}先生/女士:</Title>
      <Paragraph>非常荣幸的通知您，由于您出众的专业能力和优秀的综合素质，已经通过公司的面试考核，成为公司的一员。</Paragraph>
      <Paragraph>
        您将入职公司<Text mark>{department}部门担任{position}职位</Text>，
        <Text strong>我们对您加入
        <Link href="http://allstack.space/houseworker/index.html">{company}</Link>大家庭表示热烈的欢迎！</Text>。
      </Paragraph>
      <Paragraph>
        <ol type="1">
          <li>
            <Paragraph>
              请你于{start.year}年{start.month}月{start.day}日{start.hour}时 ，到位于<Text mark>{address}公司人力资源部</Text>办理报到手续。
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              请您在办理入职手续时，提供以下资料：
            </Paragraph>
            <ul>
              <li>居民身份证原件，外地户籍还需提供居住证原件；</li>
              <li>最高学历证书及学位证原件；</li>
              <li>专业技术职称证书原件、职业资格证书原件、上岗证书原件；</li>
              <li>前一家公司离职证明原件；</li>
              <li>最近三个月三甲医院体检证明；</li>
              <li>招商银行储蓄卡（用于工资发放）；</li>
              <li>个人近期1吋蓝底免冠照8张（用于档案资料、工作牌、劳动合同等办理）；</li>
            </ul>
          </li>
          <li>
            <Paragraph>
            您在公司的薪资福利待遇，将按公司相关制度及岗位薪酬等级标准规定执行。具体薪资金额，由公司人事部另行通知。
            </Paragraph>
          </li>
          <li>
            <Paragraph>
            该职位试用期为{time}个月，试用期满通过考核合格后转正。
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              本入职通知有效期{end.year}年{end.month}月{end.day}日，超过时间未办理报到手续，视为自动放弃。
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <Text strong>如有疑问，请与公司人力资源部{hr}联系，联系电话{tel}</Text>
            </Paragraph>
          </li>
        </ol>
      </Paragraph>
      <Paragraph>
        <Text underline>{company}公司人力资源部</Text>
      </Paragraph>
      <Paragraph>
        <Text keyboard>{start.year}年{start.month}月{start.day}日</Text>
      </Paragraph>
    </Typography>;
  return content;
}