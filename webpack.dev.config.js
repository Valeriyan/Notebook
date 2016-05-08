const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'client'),
    entry: {
        index: './index.js'
    },
    output: {
        path: '../dev',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
