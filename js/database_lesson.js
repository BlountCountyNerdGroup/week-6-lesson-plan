// Sometimes when we're programming, we need a way to create something to store information about something
// for instance, what if I wanted to create a variable to contain my age, name, interests, etc.?
// this type of variable would contain numbers and also strings 
// so it can't just be a primitive variable (number, string, boolean)
// One advanced variable type that can do this for us is called an Object

var person = {
    name: "Garrett",
    age: 17,
    sport: "frisbee"
}

// this lets us nicely bundle the variables together:
console.log(person.name);
console.log(person.age);
console.log(person.sport);


// however, any variables we create are wiped when we refresh the page
// because of that, if we have data that we want to save and keep, we have to use some kind of database

// Databases come in many forms
// There are many types of databases, stored in different places depending on how we want to use it.
// For instance, if you're wanting to allow everyone on the internet to have access to the data, you
// would want to have a database stored somewhere on the internet open to the public.

// Today we'll be using Firebase, which is a free database service owned by Google
// (this means that if you have a google account, you already have a Firebase account)

function createTodoHTML(todo) {

    // create a li (stands for line) in our webpage to put the todo in
    var todoDiv = document.createElement('li');
    todoDiv.innerHTML = todo;

    // add our newly created li to the todos section on our webpage
    document.getElementById('todos').appendChild(todoDiv);
}

function addTodo() {

    // add to list of names
    var todoText = document.getElementById('newTodo').value;

    if (todoText != "") {

        // save it to the database
        firebase.database().ref('/').push(todoText);
    }
}

// this means that when firebase gets a new value, it will give us new data
firebase.database().ref('/').on('value', function(snapshot) {
    overWriteTodos(snapshot.val());
});

function overWriteTodos(todos) {
    console.log(todos); // console.log this out

    document.getElementById('todos').innerText = "";

    for (var id in todos) {
        console.log(id)
        createTodoHTML(todos[id]);
    }
}

// we want to load all todos when we come to the website
function loadTodos() {

    // retrieve from database
    firebase.database().ref('/').once("value", function(snapshot) {
        overWriteTodos(snapshot.val());
    });

}

// this should run as soon as we load the page
loadTodos();