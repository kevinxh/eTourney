const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  watch: true,
  output: {
    path: path.join(__dirname, './client/assets'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    //new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }, {
        test: /\.(scss|sass)$/,
        loaders: ['style-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader?sourceMap']
      }
    ]
      //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!sass-loader?sourceMap') }]
  },
  postcss: [autoprefixer({ browsers: ['last 3 versions'] })],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
