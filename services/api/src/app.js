const express = require('express')
const PouchDB = require('pouchdb')
const expressPouchDB = require('express-pouchdb')

const app = express()
const localPouchDB = PouchDB.defaults({
  prefix: './data/local_',  
})

app.use('/', expressPouchDB(localPouchDB, {
  logPath: './logs/pouchdb_local.txt',
}))

const helloDb = new PouchDB('hello');

module.exports = app
