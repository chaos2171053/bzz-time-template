# bzz-time-template

<p align="center">
    <img alt="logo" src="./static/icon.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

一款自动生成组件、业务页面代码的 vscode 插件。

---

## Features

1. 自动生成列表页 CRUD。
2. 通过表单配置列表页字段 CRUD。

## Quickstart

### Install

[Visual Studio Code marketplace 搜索 bzz-time-template](https://marketplace.visualstudio.com/items?itemName=chaos2171053.bzz-time-template)

### Useage

gif 示例文件加载稍慢，稍等一下。

1. 在项目的 `routes` 目录下右键，选择 `Generate: bzz time template`
2. 选择 `模版列表页` ，输入路由名称即可生成对应的页面 List + CRUD Modal + DataSet
   ![demo1](./demo-1.gif)
3. 选择 `表单配置列表页` 则可生成对应的页面 List + CRUD Modal + DataSet，可通过表单配置 List 字段和接口地址。
   ![demo2](./demo-2.gif)

## TODO

1. <s>基于业务架构，自动生成页面代码。</s>
2. <s>通过 webview 表单配置 dataset 参数</s>。
3. 解决 windows 兼容性。
4. 可视化配置。

## LICENSE

[MIT](https://en.wikipedia.org/wiki/MIT_License)
