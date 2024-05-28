const util = require("util");

const fs = require("fs");

const { v4: uuidv4 } = require("uuid");
const { notDeepEqual } = require("assert");


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync("db.json", "utf8")
    }

    write(note) {
        return writeFileAsync("db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes.push(JSON.parse(notes))
            } catch(error) {
                parsedNotes = []
            }

            return parsedNotes;
        })
    }

    addNotes(notes) {
        const { title, text } = notes;    

        if(!title || !text) {
            throw new Error("Title and Text cannot be blank")
        }

        const newNote = { title, text, id: uuidv1()}

        return this.getNotes().then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    }

    removeNotes() {

    }
}

module.exports = new Store();