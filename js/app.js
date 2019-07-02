//--------Constants-------\\


//--------State Variables-------\\

//--------Cached DOM Elements-------\\

const $form = $('#todo-form');
const $todoList = $('#todo-list');


//--------Functions-------\\

function handleTodoSubmit(event) {
    event.preventDefault();
    const $title = $('#title').val();
    const $task = $('#task').val();
    const newTodo = { id: new Date().getTime(), title: $title, task: $task };
    render(newTodo, $todoList);
    $('#title').val('').focus();
    $('#task').val('');
}

function getToDoTemplate(todo) {
    return `
        <div class="col-md-3 offset-md-1 p-4 mb-4 bg-dark text-light animated fadeIn">
        <button data-todoid=${todo.id} class="btn btn-sm btn-danger delete-todo" style="float:right;">&times;</button>
        <h4>${todo.title}</h4>
        <p>${todo.task}</p>
        </div>
        
        `
}

function render(dataObj, domElement) {
    const template = getToDoTemplate(dataObj);
    domElement.append(template);
}

function handleToDoClick(event) {
    if (event.target.classList.contains(`delete-todo`)) {
        $(event.target).parent().remove();
    }
}

//--------Event Listeners-------\\
$form.on('submit', handleTodoSubmit);
$todoList.on('click', handleToDoClick)