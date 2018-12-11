# Ultron

## Description

本项目为Ultron系统的配置端<br/>
Ultron服务端暂未开发-.-

基于React实现的组件化的一个配置平台<br/>
通过在界面的配置，来发布上线一个web页面

启动方式：<br/>
首先需要安装依赖
```
$ npm i
$ cd src
$ npm i
$ webpack --config dll.config.js
$ gulp
$ cd ..
$ npm start
```
现在，就可以看到效果了（目前还是一个灰常简陋的版本，只有俩组件可以使用。。。Container和Text）<br/>
如果npm start启动报错。。应该是本地木有安装 [nodemon](https://www.npmjs.com/package/nodemon) 这个插件，全局安装即可。
```
127.0.0.1:12306
```

## Notes
2016-11-09: 目前项目刚刚起步，只是实现组件的添加删除和组件属性的修改

## Fix

2018-12-11: 解决因bootstrap.css更新至4.x导致的页面出现bug。（强行指定3.x版本）。