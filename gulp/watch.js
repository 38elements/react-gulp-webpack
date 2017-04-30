let gulp = require('gulp');
let runSequence = require('run-sequence');

module.exports = function(option) {
    gulp.task('watch', function() {
        gulp.watch(
            [option.src + '/**/*.js', option.src + '/**/*.scss', option.src + '/**/*.html'],
            function(event) {
            return runSequence('eslint', 'html', 'sass', 'webpack', 'browser-reload');
        });
    });
};
