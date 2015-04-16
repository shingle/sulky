/**
 * SunEee
 * @date Created on 2015/4/3
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';

var fis = module.exports = require('fis');

/**
 * update notifier service
 */
var updateNotifier = require('update-notifier');

/**
 * package info
 */
var pkg = fis.util.readJSON(__dirname + '/package.json');

// Checks for available update and returns an instance
var notifier = updateNotifier({pkg: pkg});

// Notify using the built-in convenience method
notifier.notify();

/**
 * prefixes
 * @type {string[]}
 */
fis.require.prefixes = ['sulky', 'fis'];

/**
 * cli name
 * @type {string}
 */
fis.cli.name = 'sulky';

/**
 * cli package info
 */
fis.cli.info = pkg;

/**
 * commands
 * @type {string[]}
 */
fis.cli.help.commands = ['release', 'server'];


/**
 * cli version
 * @type {*|exports|module.exports}
 */
fis.cli.version = require('./lib/version');

/**
 * 合并默认配置
 * @type {*|exports|module.exports}
 */
var defaultConfig = require('./lib/config.js');

/**
 * merge default config
 */
fis.config.merge(defaultConfig);



