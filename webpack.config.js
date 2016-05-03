var webpack = require('webpack');
var path = require('path');
module.exports = {
        entry: [
            'webpack-hot-middleware/client',
            './client/index.js'
        ],
        output: {
            path: path.join(__dirname, './client/assets'),
            filename: 'bundle.js',
            publicPath: '/static/'
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        module: {
            loaders: [{ 
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
            }]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
};