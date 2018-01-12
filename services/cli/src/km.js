#!/usr/bin/env node

'use strict';

process.title = 'km';

const semver = require('semver');

// Exit early if the user's node version is too low.
if (!semver.satisfies(process.version, '>=6')) {
  console.log('Use node >= 6');
  process.exit(1);
}

const commandLineCommands = require('command-line-commands')
const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')
const argData = require('./args')

const { command, argv } = commandLineCommands([ null, 'help', 'commit' ])

/* important: pass in the argv returned by `commandLineCommands()` */
const options = commandLineArgs(argData[command].definitions, argv)
const usage = commandLineUsage(argData[command].usage)

switch (command) {
  case null:
    if (options.version) {
      console.log('version 90')
    } else {
      console.log(usage)
    }
    break

  case 'help':
    if (options.topic) {
      console.log(commandLineUsage(argData[options.topic].usage))
    } else {
      console.log(commandLineUsage(argData.help.usage))
    }
    break

  case 'commit':
    if (options.message) {
      console.log('commit: ' + options.message)
    } else {
      console.log(usage)
    }
    break
}