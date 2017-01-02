'use strict';

const del = require('del');
const pug = require('gulp-pug');
const gulp = require('gulp');
const settings = require('../src/view/settings.json');
const { log, colors } = require('gulp-util');

/**
 * Transpile Pug files to HTML files.
 */
function transpile() {
  gulp.src('./src/view/*.pug')
    .pipe(pug({ pretty: true, data: settings }))
    .pipe(gulp.dest('./dist'));
}

/**
 * Clean output dir files.
 * @param {Function} done Async function to delimit task end.
 */
function clear(done) {
  del('./dist/**/*.html')
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

module.exports = { clear, transpile };
