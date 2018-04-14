const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { Config } = require('webpack-config');
console.log(process.env.BASE_HREF)
const extractCss = new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
});
const cleanBuild = new CleanWebpackPlugin(['build'], { verbose: true, root: path.resolve(__dirname, '..') });
const htmlTpl =  new HtmlWebpackPlugin({
  template: './public/index.html',
  PUBLIC:'public',
  BASE_HREF: process.env.BASE_HREF || './',
  TITLE: 'Application Title',
});
const copyAssets = new CopyWebpackPlugin();

module.exports = new Config().merge({
  entry: {
    app: [
      './src/index'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx'],
  },
  plugins: [
    extractCss,
    cleanBuild,
    htmlTpl,
    copyAssets,
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        },
        exclude: /index\.html$/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './config/postcss.config.js'
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
});
