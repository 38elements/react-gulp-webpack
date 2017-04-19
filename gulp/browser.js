let gulp = require('gulp');
let browserSync = require('browser-sync').create();

module.exports = function(option) {
    gulp.task('browser-start', function(callback) {
        browserSync.init({
            proxy: 'http://localhost:4000',
            serveStatic: [{
                route: '/public',
                dir: 'dist'
            }],
            startPath: '/public',
            port: 3000
        });
        callback();
    });

    gulp.task('browser-reload', function(callback) {
        browserSync.reload();
        callback();
    });
}
