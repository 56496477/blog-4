(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{743:function(n,t){n.exports="### 搭建一个企业级脚手架\n\n### 脚手架的三个组成部分\n\n* 全局命令包, 提供 `install`、`init`、`start`、`build` 等命令; [cli-tpl](https://github.com/imaoda/cli-tpl)\n* 模板插件包(单独抽离可以做到同步最新包到业务); [gen-tpl](https://github.com/imaoda/gen-tpl)\n* 构建插件包(webpack 的配置, 单独配置及做到了可单独暴露给用户的功能); [build-tpl](https://github.com/imaoda/build-tpl)\n\n### 探索\n\n能否分为两部分?\n\n* 命令构建包: 全局命令包 + 构建插件包\n* 模板插件包\n\n### 相关资料\n\n* [搭一个企业级脚手架](https://juejin.im/post/5d650613f265da03951a0364#comment): 着重推荐这篇文章, 后续脚手架可以按照这篇文章的思路来;"}}]);