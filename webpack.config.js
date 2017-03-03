'use strict';

const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './frontend/index.js'
    ],
    output: {
        path: path.resolve('public/'),
        filename: 'js/build.js',
        publicPath: '/'
    },
    watch: true,
    devServer: {
        //hot: true,
        contentBase: path.resolve('public/'),
        publicPath: '/'
    },
    module: {
        loaders: [{
            test:       /\.js?$/,
            exclude:    /node_modules/,
            loader:     'babel-loader'
        }, {
            test:       /\.scss$/,
            loader:     ['style-loader', 'css-loader', 'sass-loader'],
            // loader: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: ['css-loader', 'sass-loader']
            // })
        }, {
            test:       /\.(png|jpg|svg|gif|ttf|eot|woff|woff2)$/,
            loader:     'file?name=[name].[ext]?[hash]'
        }]
    },
    plugins: [
        //new ExtractTextPlugin("./css/style.css?[hash]"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};