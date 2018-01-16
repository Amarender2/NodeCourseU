console.log('Notes Js File');

var fs = require('fs');
// console.log(module);

// module.exports.age= 26;

// module.exports.addNote = function () {
//     console.log("Adding Note asdasd");
// }

// module.exports.add = function (a, b) {
//     return a + b;
// }

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNotes = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = function () {
    console.log('Getting All Notes');
    return fetchNotes();
}

var remove = function (title) {
    console.log('Removing Notes', title);
    var notes = fetchNotes();
    var otherNotes = notes.filter((note) => note.title !== title);

    saveNotes(otherNotes);
    return otherNotes.length !== notes.length;
}

var read = function (title) {
    console.log('Reading Notes', title);
    var notes = fetchNotes();
    var otherNotes = notes.filter((note) => note.title === title);

    if(otherNotes.length != 0) {
        return otherNotes[0];
    }
}

// In es6 leave if both are same , add just one name
module.exports = {
    addNotes,
    getAll,
    remove,
    read: read
};