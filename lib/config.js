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
		optimizer: {},
		parser: {
			sass: 'sass',
			scss: 'sass'
		},
		lint: {
			js: 'jshint'
		},
		postprocessor: {
			/*html: 'amd',
			js: 'amd'*/
		},
		prepackager: [],

		postpackager: []
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
		postprocessor: {

		},
		postpackager: {

		},

		parser: {
			sass: {
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
