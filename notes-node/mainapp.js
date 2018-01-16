console.log('Starting Notes Program');

const fs  = require('fs');

const notes = require('./notes');

const _ = require('lodash');
const yargs = require('yargs');

var titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

var bodyOptions = {
    describe: 'Contents of note',
    demand: true,
    alias: 'b'
};

var argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Lists all notes')
    .command('read', 'Reads a note', {
        title: titleOptions
    })
    .command('remove', 'Removes a note', {
        title: titleOptions
    })
    .help()
    .argv
var arg =  argv._[0]; //process.argv[2];

if(arg == 'list') {
    console.log('Listing Notes');
    var allNotes = notes.getAll();
    allNotes.forEach(note => console.log(note));
} else if(arg == 'add') {
    console.log('Adding Notes');
    var note = notes.addNotes(argv.title, argv.body);
    if(!note) {
        console.log('Note note added as it is duplicate');
    } else {
        console.log('Note created', note.title, note.body);
    }
} else if(arg == 'remove') {
    console.log('Removing Notes');
    var removed = notes.remove(argv.title);
    if(!removed) {
        console.log('Note with this title not found!');
    }
} else if(arg == 'read') {
    console.log('Reading Notes');
    var note = notes.read(argv.title);
    debugger;
    if(note) {
        console.log('Note Found : ' , note);
    } else {
        console.log('Note Not Found with title : ' + argv.title);
    }
} else {
    console.log('Command Not Recognized');
}
