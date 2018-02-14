const webpack = require('webpack');
const { Config } = require('webpack-config');

module.exports = new Config().extend('config/webpack.base.config.js').merge({
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    inline:false,
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    disableHostCheck: true
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
