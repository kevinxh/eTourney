var webpack = require('webpack');
var path = require('path');
module.exports = {
        devtool: 'cheap-module-eval-source-map',
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
            new webpack.HotModuleReplacementPlugin()
        ],
        module: {
            loaders: [{ 
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            }]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
};