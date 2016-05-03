var path = require('path');
module.exports = {
        watch: true,
        entry: './index.js',
        output: {
            path: path.join(__dirname, './assets'),
            filename: 'bundle.js'
        },
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