const path = require('path');
const webpack = require('webpack');
const { Config } = require('webpack-config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = new Config().extend('config/webpack.base.config.js').merge({
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '..','build')
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /environments\/environment\.ts/,
      'environment.prod.ts'
    ),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new UglifyJSPlugin()
  ]
});
