'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const path = require('path'),
  src = path.resolve(__dirname, 'src');

module.exports = {
  optimization: { minimize: true },
  entry: path.resolve(src, 'index.js'),
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: { minimize: true }
      }, {
        loader: 'sass-loader',
        options: { outputStyle: 'compressed' }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      alwaysWriteToDisk: true,
      template: path.resolve(src, 'index.html'),
      minify: true
    }),
    new HTMLWebpackHarddiskPlugin()
  ]
};
