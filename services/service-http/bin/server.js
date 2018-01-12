require('dotenv').config()
const micro = require('micro')
const info  = require('../package.json')

micro(async (req, res) => {
  micro.send(res, 200, info)
}).listen(process.env.PORT)
