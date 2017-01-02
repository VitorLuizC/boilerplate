'use strict';

const del = require('del');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const { isDebug } = require('./config');
const { log, colors } = require('gulp-util');

/**
 * Transpile files from Stylus to CSS.
 */
function transpile() {
  var cssFiles = gulp.src('./src/style/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer());

  if (!isDebug)
    cssFiles = cssFiles
      .pipe(cssnano());

  cssFiles.pipe(gulp.dest('./dist/css'));
}

/**
 * Clean output dir files.
 * @param {Function} done Async function to delimit task end.
 */
function clear(done) {
  del('./dist/css/**/*.css')
    .then(paths => {
      let files = (paths.length > 0) ? `\n${paths.join('\n')}`  : 'none';
      log('[del]', `Files were excluded: ${files}.`);
      done();
    })
    .catch(err => {
      log('[del]', colors.red(err));
      this.emit('end');
      done();
    });
}

module.exports = { transpile, clear };
