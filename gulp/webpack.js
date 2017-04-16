let gulp = require('gulp');
let webpack = require('webpack');
let config = require('../webpack.config');


module.exports = function(option) {
    gulp.task('webpack', function (callback) {
        let compiler = webpack(config);
        compiler.run((err, stats) => {
            if (stats.compilation.errors.length) {
                console.error(stats.compilation.errors);
            }
            callback();
        });
    });
};
