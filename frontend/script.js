const apiUrl = 'http://localhost:3000';

document.getElementById('noteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    await createNote({ title, content });
    document.getElementById('noteForm').reset();
    fetchNotes();
});

async function fetchNotes() {
    const response = await fetch(`${apiUrl}/notes`);
    const notes = await response.json();
    displayNotes(notes);
}

async function createNote(note) {
    await fetch(`${apiUrl}/tambah-note`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
}

async function editNote(id) {
    const title = prompt("Enter new title:");
    const content = prompt("Enter new content:");

    if (title && content) {
        await fetch(`${apiUrl}/edit-note/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });
        fetchNotes();
    }
}

async function deleteNote(id) {
    await fetch(`${apiUrl}/hapus-note/${id}`, {
        method: 'DELETE',
    });
    fetchNotes();
}

function displayNotes(notes) {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';

    notes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button class="edit" onclick="editNote(${note.id})">Edit</button>
            <button onclick="deleteNote(${note.id})">Delete</button>
        `;
        notesList.appendChild(noteDiv);
    });
}

// Fetch notes on page load
fetchNotes();