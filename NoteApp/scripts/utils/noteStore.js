const STORAGE_KEY = "myNotes";

// Get Notes in the localStorage

export function getNotes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// SAVE NOTES 
function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

//ADD NOTES TO THE TASKS OBJECT

export function addNote(noteTitle, noteText ) {
    const notes = getNotes();

    const newNotes = {
        id: Date.now(),
        noteTitle,
        noteText,
        updateDate: new Date().toLocaleString()
    }

    notes.push(newNotes);
    saveNotes(notes);
}

// DELETE NOTE
export function deleteNote(id) {
    const notes = getNotes().filter(note => note.id !== id);
    saveNotes(notes);
}

// UPDATE NOTE
export function updateNote(id, newTitle, newText) {
    const notes = getNotes().map(note => {
        if (note.id === id) {
            return {
                ...note,
                noteTitle: newTitle,
                noteText: newText,
                updateDate: new Date().toLocaleString()
            };
        }
        return note;
    });

    saveNotes(notes);
}