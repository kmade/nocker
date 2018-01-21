const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  },
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
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'text-loader', 'postcss-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname) }),
    new webpack.NormalModuleReplacementPlugin(
      /environments\/environment\.ts/,
      'environment.prod.ts'
    ),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Application Title',
      baseHref: '/app/'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './assets'),
        to: 'assets',
        ignore: ['.*']
      },
      {
        from: path.join(
          path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/'),
          '*.js'
        ),
        to: './webcomponentjs',
        flatten: true
      }
    ]),
    new webpack.IgnorePlugin(/vertx/),
  ]
};
