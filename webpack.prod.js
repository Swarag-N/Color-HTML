const path = require('path');
const commonWebpack = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(commonWebpack, {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
