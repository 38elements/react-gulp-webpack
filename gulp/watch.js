let gulp = require('gulp');
let runSequence = require('run-sequence');

module.exports = function(option) {
    gulp.task('watch', function() {
        gulp.watch([option.src + '/**/*.js', option.src + '/**/*.css'], function(event) {
            return runSequence('eslint', 'webpack', 'browser-reload');
        });
    });
};
