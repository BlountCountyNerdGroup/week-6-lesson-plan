// this JS file will control any visual animations

// whether or not add todo button is expanded
$(document).ready(function() {
    var expanded = false;

    $('#addTodoWrapper').on("mouseenter", function() {
        if (!expanded) {
            $('#newTodo').animate({width:'toggle'}, 500);
            expanded = true;
        }
    });

    // not working for some reason
    $('#addTodoWrapper').on("blur", function() {
            expanded = false;
    });
});