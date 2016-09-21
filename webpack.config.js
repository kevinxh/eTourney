const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  watch: true,
  output: {
    path: path.join(__dirname, './client/build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader?limit=10000&name=[path][name].[ext]'
      }
    ]
      //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!sass-loader?sourceMap') }]
  },
  postcss: [autoprefixer({ remove: false, browsers: ['last 3 versions'] })],
  sassLoader: {
    //data: '@import "client/style/main.scss";',
    includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
  },
};
