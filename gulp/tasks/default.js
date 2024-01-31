/* default */
const { series } = require('gulp');
const { watch } = require('./watch'); // Ensure watch.js exports a function named watch

exports.default = series(watch);

