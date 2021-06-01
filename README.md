# [管家婆企业人力资源管理系统📊](https://github.com/coding-bai/Housekeeper-admin)

> 项目主要依赖：react, react-router-dom, antd, bizchart, axios
> 
>[👀github地址](https://github.com/coding-bai/Housekeeper-admin)


## 项目介绍📰

这个项目是一个适用于企业后台人力资源管理的web应用程序，相比以往的应用程序，图表化展示各类数据和简单易上手的可配置表单是非常不错的选择。

- 实现的功能：
  - ✅登录，前端鉴权和登录状态验证
  - ✅添加入职人员，入职新人接收offer并进行信息确认和完善
  - ✅考勤管理，包括考勤状态，补签申请，流程展示，管理端处理考勤
  - ✅请假管理，包括请假发起，管理端同意
  - ✅后勤管理，包括后勤信息更改，展示，以及查询
  - ✅离职管理，包括离职请求以及离职同意
  - ✅文章管理：包括文章的富文本编写和文章详情页查看
- 特色功能：
  - 🛠可配置化表单(表单通过js对象的方法配置，简单的学习便可上手配置)
  - 📈信息的图表化展示，更易观察
- 尚未完成功能
  - ❌缺少在token丢失的情况下自动请求来实现鉴权的功能
  - ❗ 存在重复代码和一些函数的复用性

## 表单配置🔧

```javascript
export function AddUser_Form() {
  return {
    name: "入职添加表",
    //input代表添加的时输入框
    input: {
      type: "user",
      list: [
        {
          name: "name",
          label: "姓名",
          rules: [
            { required: true, message: "姓名不能为空" }],
        },
      ]
    },
    //timePicker代表添加的是时间选择器
    timePicker: [
      {
        name: "reissueTime",
        type: "current",
        label: "入职时间"
      }
    ],
    //radio代表添加的单选框
    radio: [
      {
        name: "Next",
        label: "是否找到下家",
        list: [
          {
            name: "未找到",
            value: false
          },
          {
            name: "已找到",
            value: true
          }
        ]
      }
    ],
    //select代表添加的是下拉选择框
    select: [
      {
        name: "department",
        label: "部门",
        placeholder: "请确认入职者部门信息",
        list: [
          {
            name: "技术部",
            value: 1
          },
          {
            name: "美工部",
            value: 2
          },
          {
            name: "服务部",
            value: 3
          },
          {
            name: "产品组",
            value: 4
          }
        ]
      }
    ],
    //textArea代表添加的多行文本输入
    textArea: [
      {
        name: "reason_detail",
        label: "离职原因(详细描述)",
        placeholder: "请在这里描述您离职的详细原因，以便为您尽快处理您的离职流程"
      }
    ]
  };
}
```

## 项目文件目录📁

```shell
├─apis            //存放公用api, axios和storage
├─assets          //存放静态文件
│  ├─font
│  ├─icon
│  └─img
├─components        //组件
│  ├─CircleChart      //环状图
│  ├─Form             //表单
│  ├─IntervalChart    //柱状图
│  ├─linChart         //线型图
│  ├─MessageList      //文章列表
│  ├─PieChart         //饼图
│  ├─StepPage         //流程
│  └─Table            //表格
├─configs             //配置项，包含接口以及各类数据名
├─middleware          //重定向
├─pages             //页面
│  ├─Article          //文章
│  ├─DashBoard        //个人面板
│  │  └─Center        //个人中心
│  ├─Editor           //文档编辑器
│  ├─Error            //错误页
│  │  ├─NoAuth        //权限不足
│  │  ├─NoMatch       //404
│  │  └─OffLine       //断开网络
│  ├─Login          //登录
│  ├─Logistics      //后勤
│  ├─Manage         //管理端
│  │  ├─AddUser       //添加入职新人
│  │  ├─AskLeave      //请假管理
│  │  ├─Attendance    //签到管理
│  │  ├─Logistics     //后勤管理
│  │  └─Resign        //离职管理
│  └─Personal       //个人端
│      ├─AskLeave     //请假
│      ├─Attendance   //考勤
│      ├─Entry        //入职
│      ├─Resign       //离职
│      ├─Update       //个人信息更新
│      └─Wage         //工资
├─routers           //路由
├─theme             //修改后的antd主题
└─utils             //工具函数，format以及防抖和节流
```

## 项目中遇到的问题与解决方案📎

1. 首先是出现在hook中直接使用axios导致页面陷入数据请求死循环的过程，后来通过使用`useEffect`和`async...await`来对请求请求到的数据进行处理并且进行state数据的传入。
2. 在最开始想要获取子组件的数据时希望使用ref来进行操作，但是很快发现使用ref带来的代码阅读性查是不可避免的，于是通过传递函数来进行解决。
3. 在进行表单可配置化的时候因为数据和请求函数犯了难，这时候在子组件中更新父组件的state使得一切变得简单起来，而且也符合了react的状态提升这一思想。
4. 项目中需要考虑各种null、undefined和空值带来的数据影响，所以使用js新特性中的`a?.b`这个简单的方法便可以避免这一类问题。

## 项目总结🌟

1. 项目中并未使用react的ref以及redux，在一定程度上却更能理解设置ref和redux的原因，并且由于没有使用这二者也导致代码的阅读性和可修改性更好
2. 这次些项目是从流程去出发，让每个流程都能做到闭环，从而一定程度上更能理解一个应用程序的设计思想
3. 这个项目中并未通过配置webpack来实现对antd和less的支持，主要是出现了在支持了less后antd内部的js操作less的部分让webpack需要做较多修改，而我恰好并不能做到对webpack非常熟悉
4. 这个项目的学习过程中多了一些对react的思考以及在面对全新技术时该如何处理和快速完成自己所需的业务以及功能模块。

## 项目展示🖼

登录页
![登录页](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/281ce96a16c440ee9a8d8b00e0968703~tplv-k3u1fbpfcp-watermark.image)
个人中心
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70ae115cde67410391f9ca3d0eadbb81~tplv-k3u1fbpfcp-watermark.image)
入职
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14b815b547564cb89e7725229a1396d9~tplv-k3u1fbpfcp-watermark.image)
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b1275643421465788f2d4513abe2aca~tplv-k3u1fbpfcp-watermark.image)
入职管理
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5b7b7829aed4529b34c3e1f7dab5694~tplv-k3u1fbpfcp-watermark.image)
考勤
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c72a84d6489f4d64a8002a077988eee0~tplv-k3u1fbpfcp-watermark.image)
考勤管理
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe8c125c1aa744e6a0ed34eef1403440~tplv-k3u1fbpfcp-watermark.image)
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63e18313ce9741bc9fb82717834d9aff~tplv-k3u1fbpfcp-watermark.image)
更新信息
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa104813e3a84a0198f647cec984be6d~tplv-k3u1fbpfcp-watermark.image)
薪资
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f587b5a76c4442b5a73b083002c2b739~tplv-k3u1fbpfcp-watermark.image)
离职管理
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59314709540844d9a6bf61e09f0c9746~tplv-k3u1fbpfcp-watermark.image)
离职
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47d6b897a5d9448e850c5c15e19a11db~tplv-k3u1fbpfcp-watermark.image)
请假
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c6db4bb654043ad836c18615b5dacd4~tplv-k3u1fbpfcp-watermark.image)
请假管理
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d61c46accea413b8df93cd766792ae3~tplv-k3u1fbpfcp-watermark.image)
后勤
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6e10a044d0645f281e325c8a84bba27~tplv-k3u1fbpfcp-watermark.image)
文章
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39a6140e02f04e3dbce17104781e7def~tplv-k3u1fbpfcp-watermark.image)
文章编写
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c599d7f006714766a017854696da2853~tplv-k3u1fbpfcp-watermark.image)
