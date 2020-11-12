const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {main: './src/index.js', vendor: './src/vendor.js'},
  plugins: [new HtmlWebpackPlugin({
    template: './src/template/index.html',
  })],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
};
