const app     = require('express')()
const info    = require('../package.json')
const gateway = require('./proxy')(app)
const server  = require('http').Server(app)

app.use((req, res, next) => {
  res.io = io;
  return next() //here will ensure that app.use will return whatever the next callback returns.
})
/**
 * Just the status
 */
app.get('/', (req, res) => {
  res.json(Object.assign({
    status: 'OK'
  }, info, {
    node: process.versions
  }))
})

/**
 * Error Catcher
 */
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    message: error.message || 'An unknown error occurred',
    error,
  })
  return next()
})
/**
 * 404 last in the chain
 */
app.get('*', (req, res) => {
  res.status(404)
  res.json({
    message: 'Not found',
    error: new Error('E_NOT_FOUND').toString(),
  })
})

/**
 * Setup socket
 */
const io = require('socket.io')(server, {
  path: '/io',
  transports: ['websocket'],
}).on('connection', socket => console.log('Client connected'))


module.exports = { app, server }
