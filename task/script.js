'use strict';

const del = require('del');
const { join } = require('path');
const { isDebug } = require('./config');
const { log, colors, PluginError } = require('gulp-util');
const webpack = require('webpack');

/**
 * Babel loader configuration.
 */
const babelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'es2017']
  }
};

/**
 * Webpack bundler configuration.
 */
const config = {
  entry: join(__dirname, '../src/script/main.js'),
  output: {
    path: join(__dirname, '../dist/js'),
    filename: '[name].js'
  },
  resolve: ['', '.js'],
  module: {
    loaders: [babelLoader]
  },
  plugin: isDebug ? [] : [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors.js',
      chunks: ['main']
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
};

/**
 * Transpile JavaScript from ES6 to ES5.
 * @param {Function} done Async function to delimit task end.
 */
function transpile(done) {
  webpack(config, callback);

  /**
   * Webpack end callback.
   * @param {string} [err] Error message.
   * @param {Object} [stats] Compile status message.
   */
  function callback(err, stats) {
    if (err)
      this.emit('end');
    log('[webpack]', stats.toString({}));
  }
}

/**
 * Clean output dir files.
 * @param {Function} done Async function to delimit task end.
 */
function clear(done) {
  del('./dist/js/**/*.js')
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
