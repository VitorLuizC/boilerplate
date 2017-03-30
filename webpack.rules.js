const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractStyle = new ExtractTextPlugin('css/style.css')

const vue = {
  test: /\.vue$/,
  use: {
    loader: 'vue-loader',
    options: {
      loaders: {
        stylus: extractStyle.extract({
          use: ['css-loader', 'stylus-loader'],
          fallback: 'vue-style-loader'
        })
      }
    }
  }
}

const babel = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: 'babel-loader'
}

const pug = {
  test: /\.pug$/,
  use: 'pug-loader'
}

const image = {
  test: /\.(png|jpe?g|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '/img/[name].[ext]?[hash]'
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {}
    }
  ]
}

const font = {
  test: /\.woff2?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '/font/[name].[ext]'
      }
    }
  ]
}

/**
 * Module rules.
 */
module.exports = {
  rules: [babel, vue, pug, image, font],
  extractStyle
}
