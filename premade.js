function createTodoHTML(todo) {
    // create a div (stands for division) in our webpage to store name
    var todoDiv = document.createElement('li');
    todoDiv.innerText = todo;

    // add our newly created div to the names section on our webpage
    document.getElementById('todos').appendChild(todoDiv);
}