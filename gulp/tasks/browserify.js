const browserify = require('browserify');
const watchify = require('watchify');
const handleErrors = require('../util/handleErrors');
const bundleLogger = require('../util/bundleLogger');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const config = require('../config').browserify;
const babelify = require('babelify');

function browserifyTask(callback) {
    let bundleQueue = config.bundleConfigs.length;

    const browserifyThis = function(bundleConfig) {
        let bundler = browserify({
            cache: {}, packageCache: {}, fullPaths: false,
            entries: bundleConfig.entries,
            extensions: config.extensions,
            debug: config.debug
        }).transform(babelify);

        const bundle = function() {
            bundleLogger.start(bundleConfig.outputName);

            bundler.bundle()
                .on('error', function(err) {
                    handleErrors.apply(this, arguments); // Ensure this captures the error context correctly
                    this.emit('end'); // Might be necessary to ensure the stream is correctly signaled to end
                })
                .pipe(source(bundleConfig.outputName)) // This should correctly create a Vinyl object
                .pipe(gulp.dest(bundleConfig.dest)) // This should now receive a Vinyl object
                .on('end', function() {
                    reportFinished(bundleConfig.outputName);
                });
        };

        if (global.isWatching) {
            bundler = watchify(bundler);
            bundler.on('update', bundle);
        }

        const reportFinished = function(outputName) {
            bundleLogger.end(outputName);

            if (bundleQueue) {
                bundleQueue--;
                if (bundleQueue === 0) {
                    callback();
                }
            }
        };

        bundle(); // Initial bundle
    };

    config.bundleConfigs.forEach(browserifyThis);
}

exports.browserifyTask = browserifyTask;

