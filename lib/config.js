/**
 * SunEee
 * @date Created on 2015/4/3
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';
var plugins = {
	ractive: require('./plugins/fis-postprocessor-ractive')
};
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
		postprocessor: {},
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
				reg: /\/(components|views)\/.*\.js/i,
				isMod: true,
				jswrapper: {
					//wrap type. if omitted, it will wrap js file with '(function(){...})();'.
					type: 'amd'
					//you can use template also, ${content} means the file content
					//template : '!function(){${content}}();'
				}
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
			jswrapper: {
				//wrap type. if omitted, it will wrap js file with '(function(){...})();'.
				type: 'amd',
				//you can use template also, ${content} means the file content
				template: 'define(function(require, exports, module){\n\rvar Ractive = require("ractive");\n\r${content}});'
				//wrap all js file, default is false, wrap modular js file only.
				//wrapAll: true
			}
		},
		parser: {
			sass: {
				include_path: ['components', 'views']
			}
		},
		optimizer: {

		},
		spriter: {
			csssprites: {
				htmlUseSprite: true,
				styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig
			}
		}
	}
};
