// Inside gulp/tasks/build.js

const { series } = require('gulp');
const { browserifyTask } = require('./browserify');
const { markup } = require('./markup');

// Correctly exporting the build task as a series of other tasks
exports.build = series(browserifyTask, markup);

