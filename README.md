# sulky

`Sulky` 一个基于`fis`的前端构建方案

## 安装使用

```js

npm install -g sulky

```


```js

$ sulky

  Usage: sulky <command>

  Commands:

    release     build and deploy your project
    server      launch a server

  Options:

    -h, --help     output usage information
    -v, --version  output the version number
    --no-color     disable colored output


```

## 注意事项

* 使用`sulky` 时需要确保当前项目下面有`fis-conf.js`文件
* 使用 `sulky release -wL` 监控更改并自动刷新页面,已内置对 scss 的处理
* `release` 完成后开启本地服务器 `sulky server start` 默认使用 `node` 作为本地服务器
* 项目文件默认生成到 用户文件夹下面的sulky-tmp 临时目录,可以使用 `sulky server open`直接打开查看


