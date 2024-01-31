/* browserSync */
const browserSync = require('browser-sync').create();
const config = require('../config').browserSync;

function browserSyncTask(done) {
    browserSync.init(config);
    done();
}

exports.browserSyncTask = browserSyncTask;

