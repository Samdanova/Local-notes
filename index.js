const noteField = document.getElementById("nodeInput"); //
let arrayNote = []; //массив заметок

// функция создания заметки
function createNote(note) {
    let div = document.createElement('div');
    div.className = "alert alert-secondary";
    let btnClear = document.getElementById("btn_clear_node");
    let parent = document.getElementById("parent");
    div.innerHTML = note;
    parent.insertBefore(div, btnClear);
}

//функция загрузки заметок при загрузке страницы
document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem('note') != null) {
        arrayNote = JSON.parse(localStorage.getItem('note'));
        for(let i = 0; i < arrayNote.length; i++){
            createNote(arrayNote[i]);
        }
    }
});

btn_add_note.addEventListener("click", () => {
    if (!noteField.value) {
        alert("Заметка пустая:(");
        return
    }
    else {
    arrayNote.push(noteField.value);
    localStorage.setItem('note', JSON.stringify(arrayNote));
    createNote(noteField.value);
    noteField.value = "";
}
});

btn_clear_node.addEventListener("click", () => {
    const noteContainer = document.querySelectorAll(".alert");
    for (let i = noteContainer.length; i--;) {
        noteContainer[i].remove();
    }
    localStorage.clear();
    arrayNote = [];
});