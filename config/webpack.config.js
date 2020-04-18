const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
console.log(path.resolve(__dirname, './build'));
module.exports = {
  entry: [path.resolve(__dirname, '../client/index.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "main.js"
  },
  plugins: [new HtmlWebPackPlugin({template: path.resolve(__dirname, './index.html')})],
  devServer: {
    hot: true,
    watchContentBase: true,
    port: 3000
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
}