import { humbergu } from "../hamberger.js";
import { getNotes, deleteNote } from "./noteStore.js";
import { openEditMode } from "../addNewNote.js";

humbergu();

const displayNote = document.getElementById("display");

//  Confirm delete modal elements
const confirmDialog = document.getElementById("confirmDeleteModal");
const confirmBtn = document.getElementById("confirmDelete");
const cancelBtn = document.getElementById("cancelDelete");

let noteIdToDelete = null;

// Display Notes
export function displayNotes() {
    displayNote.innerHTML = "";
    const notes = getNotes();

    notes.forEach(note => {
        displayNote.innerHTML += `
        <div class="my-note" data-id="${note.id}">
            <h3>${note.noteTitle} <i class="fas fa-pen  edit"></i><i class="fas fa-trash-alt  delete"></i></h3>
            <p class="note-p1">${note.noteText}</p>
            <p class="note-p2">Last updated ${note.updateDate} ago</p>
        </div>
        `;
    });
}

displayNotes();

// Handle delete & edit
displayNote.addEventListener("click", (e) => {
    const noteDiv = e.target.closest(".my-note");
    if (!noteDiv) return;

    const id = Number(noteDiv.dataset.id);
    

    // Delete with Confirmation
    if (e.target.classList.contains("delete")) {
        noteIdToDelete = id;
        confirmDialog.showModal();
        /*const confirmed = confirm("Are you sure you want to delete this note?");
        if (confirmed) {
            deleteNote(id);
            displayNotes();
        } */
    }
    // Edit
    if (e.target.classList.contains("edit")) {
        openEditMode(noteDiv, id);
    }
});

// ================= CONFIRM DELETE =================
confirmBtn.addEventListener("click", () => {
    if (noteIdToDelete !== null) {
        deleteNote(noteIdToDelete);
        displayNotes();
    }
    confirmDialog.close();
    noteIdToDelete = null;
});

// ================= CANCEL DELETE =================
cancelBtn.addEventListener("click", () => {
    noteIdToDelete = null;
    confirmDialog.close();
});