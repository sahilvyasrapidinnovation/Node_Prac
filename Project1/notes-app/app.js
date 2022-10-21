//const chalk = require('chalk');
//const { describe, demandOption } = require('yargs');
const yargs = require('yargs');
const { readNotes } = require('./notes.js');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0')

//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder : {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body : {
        describe:'Note body',
        demandOption: true,
        type:'string'
      }
    },
    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a node',
    builder : {
           title : {
            describe: "Note title",
            demandOption : true
           }
    },

    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create List command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler() {
        notes.listNotes()
    }

})

//Create read command 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder :{
        title: {
            describe : ' Note title ',
            demandOption : true,
            type: 'string'
        }

    },
    handler(argv) {
       readNotes(argv.title)
    }
})

//console.log(yargs.argv)

yargs.parse()
