let gulp = require('gulp');
let glob = require('glob');
var runSequence = require('run-sequence');

let option = {
    'src': 'src'
};

glob.sync('gulp/*.js').forEach(function(file) {
    require(`./${file}`)(option);
});


gulp.task('default', function (callback) {
    runSequence('eslint', 'webpack', 'browser-start', 'watch', callback)
});
