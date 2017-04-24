let gulp = require('gulp');
let browserSync = require('browser-sync').create();

module.exports = function(option) {
    gulp.task('browser-start', function(callback) {
        browserSync.init({
            proxy: 'http://localhost:4000',
            serveStatic: [{
                route: '',
                dir: 'dist'
            }],
            startPath: '',
            port: 3000
        });
        callback();
    });

    gulp.task('browser-reload', function(callback) {
        browserSync.reload();
        callback();
    });
}
