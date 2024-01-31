const gulp = require('gulp');

// Task Imports
const { browserifyTask } = require('./gulp/tasks/browserify');
const { browserSyncTask } = require('./gulp/tasks/browserSync');
const { build } = require('./gulp/tasks/build');
const { markup } = require('./gulp/tasks/markup');
const { setWatch } = require('./gulp/tasks/setWatch');
const { watch } = require('./gulp/tasks/watch');

// Direct Task Registration
// If the individual tasks are not dependent on one another or don't need to be executed in a specific order outside of 'build' or 'watch',
// they don't need to be explicitly registered here again since they're already registered in their respective files through `exports`.

// Registering Composite Tasks
// Note: Since 'build' and 'default' tasks are already defined in their respective task files and exported,
// there's no need to redefine them here unless you want to modify their behavior or composition.

// Default Task Setup
// This step is technically not needed if `exports.default` is properly defined in 'default.js',
// but if you want to redefine or clarify the default task, you can do so as follows:
gulp.task('default', build);

// Optionally, if you want to ensure 'setWatch' is always run before 'watch' and 'browserSyncTask' for development:
gulp.task('dev', gulp.series(setWatch, watch, browserSyncTask));
gulp.task('build', build);
// Ensure 'gulp --tasks' shows all tasks correctly

