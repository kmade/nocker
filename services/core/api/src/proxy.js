
const httpProxy = require('express-http-proxy')

module.exports = (app) => {
  // Proxy request
  app.use('/service', httpProxy('http://service-http'))
}
