/* markup */
const gulp = require('gulp');
const config = require('../config').markup;

function markup() {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
}

exports.markup = markup;

