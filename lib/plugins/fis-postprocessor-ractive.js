/**
 * SunEee
 * @date Created on 2015/4/9
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

var Ractive = require('ractive');


'use strict';
module.exports = function (content, file, conf) {


	var options = file;

	console.log(arguments);

	function make() {
		this.files.forEach(function (file) {
			var templates = file.src.map(parse);
			grunt.file.write(file.dest,
				'var templates = {\n' + templates.join(',\n') + '\n}');
		});
	}

	function parse(template) {
		var name = path.basename(template, '.mustache'),
			html = grunt.file.read(template),
			parsed = Ractive.parse(html);

		return '\t' + name + ': ' + JSON.stringify(parsed);
	}

	/*if (file.isMod || conf.wrapAll || options) {

	 var template = getConfig('template', options, conf);
	 var type = getConfig('type', options, conf);

	 // wrap
	 if (template) {
	 content = String(template)
	 .split('${content}').join(content)
	 .split('${id}').join(file.getId());
	 } else if (type === 'amd') {
	 if (!/^\s*define\s*\(/.test(content)) {
	 content = 'define(\'' + file.getId() + '\', function(require, exports, module){ ' + content + ' \r\n});';
	 }
	 } else {
	 if (!/^\s*(?:[!(]\s*|void\s+)function\(/.test(content)) {
	 content = '!function(){try{ ' + content + ' \r\n}catch(e){}}();';
	 }
	 }
	 }*/
	return content;
};

function getConfig(key, local, global) {
	return local && typeof local[key] !== 'undefined' ? local[key] : global[key];
}
