const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {main: './src/index.js', vendor: './src/vendor.js'},
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template/index.html',
  }), new CleanWebpackPlugin()],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         {
  //           loader: 'style-loader',
  //         }, {
  //           loader: 'css-loader',
  //           options: {
  //             modules: true,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
};
