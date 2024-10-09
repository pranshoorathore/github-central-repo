let todos;

if(localStorage.getItem('todos')){
    todos = JSON.parse(localStorage.getItem('todos'));
    updateDisplay();
}
else todos = [];

function createTodo(event){
    if(document.getElementById('todo-input').value == "") alert('Enter the todo first');
    event.preventDefault();
    todos.push(document.getElementById('todo-input').value);
    updateDisplay();
    document.getElementById('todo-input').value = "";
    // return false;
}

function removeTodo(index){
    todos.splice(index, 1);
    updateDisplay();
}

function updateDisplay(){
    let list = document.getElementById('list');
    list.innerHTML = "";
    for(let i=0; i<todos.length; i++){
        let todo = document.createElement('div');
        let paragraph = document.createElement('p');
        let deleteButton = document.createElement('button');
        deleteButton.innerText = '❌';
        deleteButton.className = 'delete-button'
        deleteButton.onclick = function(){
            removeTodo(i);
        }
        paragraph.innerText = todos[i];
        todo.className = 'todo';
        todo.appendChild(paragraph);
        todo.appendChild(deleteButton);
        list.appendChild(todo);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}