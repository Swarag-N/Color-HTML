const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const commonWebpack = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(commonWebpack, {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
});
