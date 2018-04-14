const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { Config } = require('webpack-config');

const extractCss = new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
});
const cleanBuild = new CleanWebpackPlugin(['build'], {
  verbose: true,
  root: path.resolve(__dirname, '..')
});
const htmlTpl =  new HtmlWebpackPlugin({
  template: './public/index.html',
  PUBLIC:'public',
  BASE_HREF: process.env.BASE_HREF || '/',
  TITLE: 'Application Title',
});
const copyAssets = new CopyWebpackPlugin([{
    from: path.join(
      path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/'),
      '*.js'
    ),
    to: './webcomponentjs',
    flatten: true
}]);

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
    extensions: ['.ts', '.js']
  },
  plugins: [
    extractCss,
    cleanBuild,
    htmlTpl,
    copyAssets,
    new webpack.IgnorePlugin(/vertx/),
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
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader' },
        { loader: 'ts-loader' },
      ]
      },
      {
        test: /\.css$/,
        loader: 'postcss-loader',
        options: {
          config: {
            path: './config/postcss.config.js'
          }
        }
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
