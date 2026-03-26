let todos = JSON.parse(localStorage.getItem('todos')) || [];
function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}
function addTodo(){
    const textInput = document.getElementById('todo-input');
    const timeInput = document.getElementById('time-input');
    const text = textInput.value.trim();
    const time = timeInput.value;
    if(text === '') return;
    todos.push({
        text: text,
        time: time,
        completed: false
    });
    textInput.value = '';
    timeInput.value = '';
    saveTodos();
    renderTodos();
}
function deleteTodo(index){
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}
function toggleComplete(index){
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}
function renderTodos(){
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        if(todo.completed){
            li.classList.add('completed');
        }
        li.innerHTML = `
            <span class="task">${todo.text}</span>
            <span class="time">${todo.time || '--'}</span>
            <div class="actions">
                <button onclick="toggleComplete(${index})">✔</button>
                <button onclick="deleteTodo(${index})">✖</button>
            </div>
        `;
        list.appendChild(li);
    });
}
renderTodos();