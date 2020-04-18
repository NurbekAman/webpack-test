const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = function (webpackEnv) {
  const isEnvDevelopment = process.env.NODE_ENV === 'development';
  const isEnvProduction = process.env.NODE_ENV === 'production';

  return {
    entry: [path.resolve(__dirname, '../client/index.js')],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: "main.js"
    },
    plugins: [new HtmlWebPackPlugin({template: path.resolve(__dirname, './index.html')})],
    devServer: isEnvDevelopment ? {
      hot: true,
      watchContentBase: true,
      port: 3000
    } : undefined,
    devtool: isEnvDevelopment ? 'source-map' : undefined,
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
}