'use strict';

const path = require('path');

module.exports = {
    entry: './frontend/index.js',
    output: {
        path: path.resolve('public/js/'),
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};