/* watch */
const gulp = require('gulp');
const { markup } = require('./markup'); // Ensure markup.js exports a function
const { browserSyncTask } = require('./browserSync');
const config = require('../config');

function watch() {
    gulp.watch(config.markup.src, gulp.series(markup));
    // Add more watch tasks here
}

exports.watch = watch;

