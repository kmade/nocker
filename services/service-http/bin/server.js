#!/usr/bin/env node

require('dotenv').config()

const micro = require('micro')
const info  = require('../package.json')

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

micro(async (req, res) => {
  micro.send(res, 200, info)
}).listen(process.env.PORT || 80)

