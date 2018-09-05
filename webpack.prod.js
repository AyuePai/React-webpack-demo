const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const config = merge(common, {
    devtool: false,
    mode: 'production',
    plugins: [
        new UglifyJSPlugin()
    ]
});

module.exports = config;