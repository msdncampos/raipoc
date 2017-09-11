var gulp = require('gulp');
var sass = require('gulp-sass');
var compress = require('gulp-compress');


gulp.task('rai', function(){
	gulp.src('scss/app.scss')
		.pipe(sass({outputStyle: 'compressed'}).
			on('error', sass.logError))
		.pipe(gulp.dest('css'))
});


gulp.task('default', ['rai'], function() {
  gulp.watch(['scss/**/*.scss'], ['rai']);
});
