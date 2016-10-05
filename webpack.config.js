const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

var warnCleaner = postcss.plugin('postcss-warn-cleaner', function () {
    return function (css, result) {
        result.messages = [];
    };
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    //'webpack-hot-middleware/client',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, './client/build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    //new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }, {
        test: /(\.scss|\.css)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }, {
        test    : /(\.scss|\.css)$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-toolbox'),
        ],
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      },{
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader?limit=10000&name=[path][name].[ext]'
      }
    ]
  },
  postcss: [autoprefixer({ remove: false, browsers: ['last 3 versions'] }), warnCleaner],
  sassLoader: {
    //data: '@import "client/style/main.scss";',
    includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
  },
};
