/**
 * SunEee
 * @date Created on 2015/4/3
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';

module.exports = function () {

	fis.log.info('sulky: ' + fis.cli.info.version);
	fis.log.info('fis:   ' + fis.version);
	fis.log.info('deps:  ' + JSON.stringify(fis.info.dependencies, null, 2));

};
