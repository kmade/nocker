const shell = require('shelljs')
const log = require('./lib/logger')
module.exports = (name = 'Guest', voice='Thomas') => {
  let cmd = `say  -v ${voice} 'Hey ${name}!'`
  log(`Execute command: "${cmd}"`)
  shell.exec(cmd).code
  return 'Done!'
}
