<h1 align="center">Grasscutter Tools</h1>

[English](README.md) | 简体中文

![](img/b001.png)
![](img/b101.png)
![](img/b201.png)
![](img/b301.png)
![](img/b401.png)

[![GitHub license](https://img.shields.io/github/license/jianxingxuejian/grasscutter-tools)](https://github.com/jianxingxuejian/grasscutter-tools/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jianxingxuejian/grasscutter-tools)](https://github.com/jianxingxuejian/grasscutter-tools/stargazers)
[![Github All Releases](https://img.shields.io/github/downloads/jianxingxuejian/grasscutter-tools/total.svg)](https://github.com/jianxingxuejian/grasscutter-tools/releases)
[![Github All Releases](https://img.shields.io/github/v/release/jianxingxuejian/grasscutter-tools)](https://github.com/jianxingxuejian/grasscutter-tools/releases)

## 功能

- [x] 常用指令
- [x] 快速生成圣遗物
- [x] 物品分类检索
- [x] mod管理
- [x] 管理员控制台
- [ ] 自动更新
- [ ] 启动器
- [ ] 任务列表

## 使用

需要服务端配合[这个插件](https://github.com/jianxingxuejian/grasscutter-plugin/releases/tag/v1.4.0)使用。

使用客户端之前需要完成简单的账号认证(向你的游戏发送验证码邮件然后在 1 分钟之内完成验证或者用该游戏账号的密码验证)。服务端拥有者可以完成管理员认证然后使用管理员控制台，效果与服务器控制台相同。

有什么疑问或者想添加功能请提 issue。

## 下载

windows平台下载.msi文件，mac平台下载.dmg文件，linux平台下载.deb文件，请前往[此处](https://github.com/jianxingxuejian/grasscutter-tools/releases)下载最新版本。

## 开发

使用 Tauri 构建，前端技术栈：Vue3 + Vite3 + Typescript + Naive-ui + Unocss + Vue I18n。

开发需要Node和Rust环境，包管理使用pnpm。

安装依赖：

```shell
pnpm install
```

启动：

```shell
pnpm tauri dev
```

更详细的内容请前往[Tauri](https://github.com/tauri-apps/tauri)项目进行了解。

## 贡献

欢迎任何形式的贡献！
