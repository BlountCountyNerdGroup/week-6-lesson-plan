// Sometimes when we're programming, we need to save information for later
// whether we're saving our current location in a game or maybe amount of points.
// Or maybe we're building a image sharing site and we need to store images

// let's start with talking about how we would save a list of information in the first place
// we would probably want to create an array. Does anyone remember what an array is? 
//     A. (list of data that can be added to)

var myArray = ["Vanilla", "Chocolate", "Strawberry"];

// if we want to access a specific element, we write
myArray[0]; // or 1 or 2

// if we want to store that in a variable, how would we do it?
//     A. just write `var someVarName = ` in front of it like this

var superCoolVariable = myArray[0];

// however, any variables we create are wiped when we refresh the page
// because of that, if we have data that we want to save and keep, we have to use some kind of database

// Databases come in many forms
// There are many types of databases, stored in different places depending on how we want to use it.
// For instance, if you're wanting to allow everyone on the internet to have access to the data, you
// would want to have a database stored somewhere on the internet open to the public.

// ----------------------------------------------------------------------
// |                                                                    |
// |                TODO: add practice with arrays here                 |  
// |                                                                    |
// ----------------------------------------------------------------------

function createTodoHTML(todo, id) {

    // create a li (stands for line) in our webpage to put the todo in
    var todoDiv = document.createElement('li');
    todoDiv.innerHTML = todo + " " + createDeleteButton(id); // don't include 2nd part if we're not going to use it

    // add our newly created li to the todos section on our webpage
    document.getElementById('todos').appendChild(todoDiv);
}

function addTodo() {

    // add to list of names
    var todoText = document.getElementById('newTodo').value;

    if (todoText != "") {

        // save it to the database
        firebase
            .database()
            .ref('/')
            .push(todoText)
            .then(function(snapshot) { // .then() means that after it's done, do the following code:

                createTodoHTML(todoText, snapshot.key);
            }); 
    }
}

function overWriteTodos(todos) {
    console.log(todos); // console.log this out

    document.getElementById('todos').innerText = "";

    for (var id in todos) {
        console.log(id)
        createTodoHTML(todos[id], id);
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

// this means that when firebase gets a new value, it will give us new data
firebase.database().ref('/').on('value', function(snapshot) {
    overWriteTodos(snapshot.val());
});