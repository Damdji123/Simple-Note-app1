import { addNote, updateNote } from "./utils/noteStore.js";
import { plusNewNote } from "./plus-note.js";
import { displayNotes } from "./utils/displayNote.js";
import { humbergu } from "./hamberger.js";

humbergu();
// Close modal
plusNewNote();

const noteTitle = document.getElementById("note-title");
const noteText = document.getElementById("note-content");
const addBtn = document.getElementById("addNoteBtn");

//   Edit State
let editMode = false;
let editId = null;

export function openEditMode(noteDiv, id) {
    const titleEl = noteDiv.querySelector("h3");
    const textEl = noteDiv.querySelector(".note-p1");

    noteTitle.value = titleEl.childNodes[0].textContent.trim();
    noteText.value = textEl.textContent.trim();

    editMode = true;
    editId = id;

    addBtn.textContent = "Update Note";
    document.getElementById("infoModal").showModal();
}


addBtn.addEventListener("click", () => {
    const title = noteTitle.value.trim();
    const text = noteText.value.trim();

    if (!title || !text) {
        alert("Please fill both title and content!");
        return;
    }

    if (editMode) {
        updateNote(editId,title,text);
        editMode = false;
        editId = null;
        addBtn.textContent = "Add Note";
        alert("Note edited successfully!");
    }
    else{
        addNote(title, text);
        alert("Note added successfully!");
    }
    
    noteTitle.value = "";
    noteText.value = "";

    document.getElementById("infoModal").close();

    displayNotes();

});


displayNotes();
