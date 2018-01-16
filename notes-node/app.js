console.log('Starting Program');

const fs  = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

const yargs = require('yargs');


fs.appendFileSync('greetings.txt', 'Hello Amar... '); //You are ' + notes.addNote()

//console.log(notes.add(9,-2));

console.log(_.isString(true));
console.log(_.isString('Amar'));

var array = _.uniq(['Amar', 1,2,3,4,1,'Amar']);
console.log(array);

var user = os.userInfo();
console.log(user.username);

// For command line arguments
console.log(process.argv);

var arg = process.argv[2];
console.log('Process Args ', arg);

const argv = yargs.argv;
console.log('Yargs Args : ' , argv);


if(arg == 'list') {
    console.log('Listing Notes');
} else if(arg == 'add') {
    console.log('Adding Notes');
    notes.addNotes(argv.title, argv.body);
} else if(arg == 'remove') {
  console.log('Removing Notes');
} else if(arg == 'read') {
    console.log('Reading Notes');
} else {
    console.log('Command Not Recognized');
}
