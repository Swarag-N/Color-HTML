const path = require('path');
const commonWebpack = require('./webpack.common');
const {merge} = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(commonWebpack, {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
