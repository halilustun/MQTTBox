/* setWatch */
function setWatch(done) {
    global.isWatching = true;
    done();
}

exports.setWatch = setWatch;

