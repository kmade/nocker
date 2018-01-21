const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry: {
    app: [
        './src/index'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    hot: false,
    inline:false,
    port: process.env.PORT,
    host: '0.0.0.0',
    disableHostCheck: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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
    new CleanWebpackPlugin(['dist'], { verbose: true, root: path.resolve(__dirname) }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Application Title',
      baseHref: '/app/',
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
    new webpack.HotModuleReplacementPlugin(),
  ]
};
