var obj = {
    name: "Amar"
};

const fs = require('fs');

var stringObj = JSON.stringify(obj);

fs.writeFileSync('notes.json', stringObj);
console.log(typeof stringObj);
console.log(stringObj);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof noteString);
console.log(noteString.toString());
console.log(typeof note);
console.log(note.name);


var stringJson = '{"name":"Amar", "age":"26" }';
var person  = JSON.parse(stringJson);
console.log(typeof person);
console.log(person);
