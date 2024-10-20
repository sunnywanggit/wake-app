# wake-app

> 插件——h5唤醒app

## 如何安装
`npm install @bb/wake-app`

## 如何使用
```
import wakeApp from "wake-app";

/**
 * @param {string} path 统跳链接，需从统跳路由表中取值传入
 * @param {object} query 统跳传参，不传默认为{}
 * @param {string} hash 统跳hash值，通常定义跳转页面后打开子模块
 * @param {string} downloadUrl 自定义无app时下载包路径
 */
wakeApp(
  'bbn://mobile.billionbottle.com/home/home',
  {
    tab: 0,
    type: '发现',
  },
  '精选',
  'https://web.billionbottle.com/baiping-baidu.apk',
);
```

## 统跳路由表git项目地址

项目中的`router.json`文件就是统跳路由表
