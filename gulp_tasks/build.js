const argv        = require('yargs').argv;
const browsersync = require('browser-sync').create();
const config      = require('../enrollment.config.js');
const cp          = require('child_process');
const gulp        = require('gulp');

let build = [];
Object.keys(config.tasks).forEach(function (key) {
  if (config.tasks[key] && key != 'browsersync' && key != 'watch') {
    build.push(key);
  }
});

/**
 * Build task, this will minify the images, compile the sass,
 * bundle the js, but not launch BrowserSync and watch files.
 */
gulp.task('build', build);

/**
 * Test task, this use the build task.
 */
gulp.task('test', build);
