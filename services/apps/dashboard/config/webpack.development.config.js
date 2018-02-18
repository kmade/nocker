const path = require('path');

module.exports = (config) => {
  config.output.publicPath = process.env.BASE_HREF || '/'
}

