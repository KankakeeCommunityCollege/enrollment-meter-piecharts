const config        = require('../enrollment.config.js');
const gulp          = require('gulp');
const watch         = require('gulp-watch');

gulp.task('watch', function () {

  if (config.tasks.sass) {
    watch(config.assets + '/' + config.sass.src + '/**/*', function () {
      gulp.start('sass');
    });
  }

  if (config.tasks.browsersync) {
    watch([
      '!./node_modules/**/*',
      '!./README.md',
      '*.html',
      './**/*.md',
      './**/*.markdown',
      config.assets + '/' + config.sass.dest + '/**/*',
      config.assets + '/' + config.js.dest + '/**/*',
    ], function () {
      gulp.start('browser-reload');
    });
  }
});
