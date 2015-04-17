## sulky

`Sulky` 一个基于`fis`的前端构建方案

## 开发环境

* node http://nodejs.org/   
* git http://git-scm.com/
* bower http://bower.io/


## 安装使用

`npm install -g sulky`

`sulky -v` 查看是否安装成功

安装`npm`模块的过程如果时间太长的话可以使用国内的镜像安装

`npm install -g sulky --registry=https://registry.npm.taobao.org`

## 注意

* 使用`sulky` 时需要确保当前项目下面有`fis-conf.js`文件
* 使用 `sulky release ` 把项目文件生成到临时目录下面，加上参数 ` -h` 查看帮助
* `release` 完成后开启本地服务器 `sulky server start` 
* 项目文件默认生成到 用户文件夹下面的sulky-tmp 临时目录,可以使用 `sulky server open`直接打开查看


## 服务配置项

`Sulky` 支持[rc](https://github.com/dominictarr/rc)格式的服务配置，该配置仅对 `sulky server start` 命令有效

在本地开发的过程中可以使用该配置来转发`path`路径下面的请求到指定地址`api`，具体可用配置项如下：


```
{
	"port":8008,
	"host":"localhost",
	"proxy":{
		"path":"",
		"api":""
	}	
}
```

查看示例文件 [.sulkyrc](https://github.com/shingle/sulky/blob/master/doc/.sulkyrc)

把`.sulkyrc`保存到用户目录下即可


