const path = require('path')
const webpack = require('webpack')
const { rules, extractStyle } = require('./webpack.rules.js')
const HtmlPlugin = require('html-webpack-plugin')
const { DefinePlugin } = webpack
const { UglifyJsPlugin } = webpack.optimize


/**
 * Distribution dir.
 * @type {string}
 */
const dist = path.join(__dirname, './dist')

/**
 * @type {webpack.Configuration}
 */
const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js?[hash]',
    path: dist
  },
  module: { rules },
  plugins: [
    extractStyle,
    new HtmlPlugin({
      filename: 'index.html',
      template: './src/index.pug'
    })
  ],
  devtool: 'source-map'
}

/**
 * Exporting a function let webpack add environment as param.
 * @param {string} env
 * @returns {webpack.Configuration}
 */
module.exports = env => {
  const isProd = (env === 'production')

  if (isProd) {
    config.devtool = false
    config.plugins = (config.plugins || []).concat([
      new DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
      })
    ])
  }

  return config
}
