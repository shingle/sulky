/**
 * SunEee
 * @date Created on 2015/4/3
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';

var fis = module.exports = require('fis3');

fis.require.prefixes.unshift('sulky');
fis.cli.name = 'sulky';
fis.cli.info = require('./package.json');
/**
 * commands
 * @type {string[]}
 */
fis.cli.help.commands = ['release', 'server'];

fis.cli.version = require('./lib/version');

//所有scss文件使用sass插件预编译
fis.match('**/*.scss', {
	// fis-parser-less 插件进行解析
	parser: fis.plugin('sass'),
	// .scss 文件后缀构建后被改成 .css 文件
	rExt: '.css'
})

// 忽略_开头的文件
.match('_*.scss', {
	release: false
})

// 加 md5
.match('*.{js,css,eot,svg,ttf,woff}', {
	useHash: true
})

// 图片加上md5
.match('::image', {
	useHash: true
})

// 打包压缩
.match('::package', {
	// 启用 fis-spriter-csssprites 插件
	spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
.match('*.css', {
	// 给匹配到的文件分配属性 `useSprite`
	useSprite: true
})

// all js files
.match('*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	// strip-debug 移除alert console debugger等语句
	optimizer: [fis.plugin('uglify-js'), fis.plugin('strip-debug')]
})


//ractive 模板
.match('*.tpl', {
	// 使用ractive 预编译模板
	optimizer: fis.plugin('ractive'),
	// ractive预编译后标记为JSON数据
	isJsonLike: true,
	// 这里我们配置一下不要拷贝tpl文件到目标目录去，模板已经内置到js里面了-。 -
	release: false
})

// html minify
.match('*.{html,jsp}', {
	optimizer: fis.plugin('html-minifier')
})

// minify sass file
.match('*.scss', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
	optimizer: fis.plugin('clean-css')
})

// optimize image
.match('*.png', {
	// fis-optimizer-png-compressor 插件进行压缩，已内置
	optimizer: fis.plugin('png-compressor')
})

// 忽略*.map文件
.match('*.map', {
	release: false
});


// 默认不指定media的情况下都是dev
fis.media('dev')

.match('*', {
	// 不加md5
	useHash: false,
	// 不优化压缩
	optimizer: null
});
