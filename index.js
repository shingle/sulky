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
