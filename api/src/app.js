const express = require('express')
const { name } = require('../package.json')
const app = express()
const HELLO = `Hello ${name}`

app.get('/', (req, res) => {
  res.status(200).send(HELLO)
})

module.exports = app
