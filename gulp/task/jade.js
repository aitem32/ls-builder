'use strict';

module.exports = function($) {
  $.gulp.task('jade', function() {
    return $.gulp.src($.path.template, { since: $.gulp.lastRun('jade') })
      .pipe($.gp.jade({ pretty: true }))
      .on('error', $.gp.notify.onError(error => ({
          title: 'Jade',
          message:  error.message
       })))
      .pipe($.gulp.dest($.config.root));
  });
};
