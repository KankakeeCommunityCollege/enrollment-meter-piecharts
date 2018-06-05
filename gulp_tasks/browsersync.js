const argv        = require('yargs').argv;
const browsersync = require('browser-sync').create();
const config      = require('../enrollment.config.js');
const cp          = require('child_process');
const gulp        = require('gulp');

let browser = (config.browsersync.browsers[0] != null) ? config.browsersync.browsers : 'default';

/**
 * Launch the Server
 */
gulp.task('browsersync', function () {
  return browsersync.init({
    port: config.port,
    browser: browser,
    server: {
      baseDir: "./"
    }
  });
});

/**
 * Do page reload
 */
gulp.task('browser-reload', function () {
  browsersync.reload();
});
