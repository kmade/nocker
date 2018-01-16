#!/usr/bin/env node

require('dotenv').config()
const { app, server } = require('..')

const HOST = '0.0.0.0'
const PORT = process.env.PORT || 80
server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}`))

process.on('SIGINT', function onSigint () {
  console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString())
  shutdown()
})

// quit properly on docker stop
process.on('SIGTERM', function onSigterm () {
  console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString())
  shutdown();
})

// shut down server
function shutdown() {
  server.close(function onServerClosed (err) {
    if (err) {
      console.error(err)
      process.exitCode = 1
		}
		process.exit()
  })
}


