var gulp = require("gulp"),
	browserSync = require('browser-sync');
	sass = require('gulp-sass');

gulp.task('server', function() {
	browserSync({
		port: 9100,
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('watch', function () {
	gulp.watch([
		'app/*.html',
		'app/js/*.js',
		'app/css/*.css'
	]).on('change', browserSync.reload);
});

gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('build/css'))
});

gulp.task('default', ['server', 'watch', 'sass']);