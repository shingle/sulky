/**
 * SunEee
 * @date Created on 2015/4/17
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';


var gulp   = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('default', function() {
	return gulp.src(['./doc/**/*'])
		.pipe(ghPages());
});

