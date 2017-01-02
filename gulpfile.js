'use strict';

const gulp = require('gulp');
const view = require('./task/view');
const style = require('./task/style');
const script = require('./task/script');

gulp.task('view:clear', view.clear);
gulp.task('style:clear', style.clear);
gulp.task('script:clear', script.clear);
gulp.task('view:transpile', ['view:clear'], view.transpile);
gulp.task('style:transpile', ['style:clear'], style.transpile);
gulp.task('script:transpile', ['script:clear'], script.transpile);
gulp.task('build', ['view:transpile', 'style:transpile', 'script:transpile']);
gulp.task('watch', ['build'], watch);
gulp.task('default', ['watch']);

/**
 * Watch specific files and set respectively tasks.
 */
function watch() {
  gulp.watch('./src/script/**/*.js', ['script:transpile']);
  gulp.watch('./src/style/**/*.styl', ['style:transpile']);
  gulp.watch('./src/view/**/*.pug', ['view:transpile']);
}
