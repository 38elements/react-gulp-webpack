const gulp = require('gulp');
const eslint = require('gulp-eslint');

module.exports = function(option) {
	gulp.task('eslint', () => {
		return gulp.src([`${option.src}/**/*.js`])
			.pipe(eslint({
				useEslintrc: true
			}))
			.pipe(eslint.format())
			.pipe(eslint.failAfterError());
	});
}
