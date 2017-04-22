const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

module.exports = function(option) {
	gulp.task('sass', () => {
		return gulp.src([`${option.src}/**/*.scss`])
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('app.css'))
			.pipe(gulp.dest('./dist/'));
	});
}
