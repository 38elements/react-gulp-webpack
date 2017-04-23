const gulp = require('gulp');

module.exports = function(option) {
    gulp.task('html', () => {
        return gulp.src([`${option.src}/**/*.html`])
            .pipe(gulp.dest('./dist/'));
        }
    );
}
