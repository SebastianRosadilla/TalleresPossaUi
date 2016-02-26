'use strict';

import config from '../config';
import gulp from 'gulp';
import ts from 'gulp-typescript';
import browserSync   from 'browser-sync';

gulp.task('TypeScript', function () {
	return gulp.src(config.TS.src)
		.pipe(ts({
			noImplicitAny: true,
			out: 'main.js'
		}))
		.pipe(gulp.dest(config.TS.dest))
		.pipe(browserSync.stream());
});
