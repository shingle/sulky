/**
 * SunEee
 * @date Created on 2015/4/3
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';


module.exports = {
	urlPrefix: '',
	project: {
		exclude: '**/_*.scss',
		fileType: {}
	},
	modules: {
		optimizer: {
			js: 'strip-debug, uglify-js',
			tpl: 'ractive'

		},
		parser: {
			sass: 'sass',
			scss: 'sass'
			//tpl: ''
		},
		lint: {
			js: 'jshint'
		},
		postprocessor: {
			html: 'amd',
			js: 'amd'
		},
		prepackager: ['derived'],
		// 开起 autuload, 好处是，依赖自动加载。
		postpackager: ['autoload']
	},
	roadmap: {
		ext: {
			sass: 'css',
			scss: 'css'
		},
		path: [

			{
				reg: '/components/**/*',
				isMod: true
			},
			{
				reg: '/views/**/*',
				isMod: true
			},
			{
				reg: 'map.json',
				release: false
			},

			{
				reg: '**.min.js',
				useOptimizer: false
			}


		]
	},
	settings: {
		postprocessor: {},
		postpackager: {
			autoload: {
				type: 'requirejs'
			}
		},

		parser: {

			sass: {
				sourceMap: true,
				include_path: ['components', 'views']
			}
		},
		optimizer: {},
		spriter: {
			csssprites: {
				htmlUseSprite: true,
				styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig
			}
		}
	}
};
