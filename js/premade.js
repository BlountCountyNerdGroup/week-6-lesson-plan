// functions for deleting a todo. We might not use these during the lesson

function createDeleteButton(id) {

    // this is really ugly code
    var deleteButton = "<a href='#' onclick='deleteTodo(\"" + id + "\")'>X</a>";

    return deleteButton;
}

function deleteTodo(id) {
    firebase.database().ref('/').child(id).remove();

    loadTodos();
}