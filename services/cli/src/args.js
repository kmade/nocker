module.exports = {
  null: {
    definitions: [
      { name: 'version', alias: 'v', type: Boolean, description: 'Print the version number.' }
    ],
    usage: [
      {
        header: 'km',
        content: 'Description'
      },
      {
        header: 'synopsis',
        content: '$ km <options> <command>'
      },
      {
        header: 'Command List',
        content: [
          { name: 'help', summary: 'Display help information about km.' },          
        ]
      }
    ]
  },
  help: {
    definitions: [
      { name: 'topic', type: String, description: 'the topic to display help on', defaultOption: true }
    ],
    usage: [
      {
        header: 'km help',
        content: 'km help about a km command'
      },
      {
        header: 'synopsis',
        content: '$ km help <options>'
      }
    ]
  }
}