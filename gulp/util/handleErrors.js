var notify = require("gulp-notify");

module.exports = function() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  var notifier = notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  });

  notifier.apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

