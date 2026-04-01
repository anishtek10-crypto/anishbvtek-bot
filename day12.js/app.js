let todos = JSON.parse(localStorage.getItem('todos')) || [];
function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}
function addTodo(){
    const textInput = document.getElementById('todo-input');
    const timeInput = document.getElementById('time-input');
    const priorityInput = document.getElementById('priority-input');
    const errorMessage = document.getElementById('error-message');
    const text = textInput.value.trim();
    const time = timeInput.value;
    const priority = priorityInput.value;
    if(text === ''){
        errorMessage.textContent = "Task cannot be empty";
        textInput.classList.add("error-input");
        return;
    }
    textInput.classList.remove("error-input");
    errorMessage.textContent = "";
    todos.push({
        text: text,
        time: time,
        priority: priority || "Low",
        completed: false
    });
    textInput.value = '';
    timeInput.value = '';
    priorityInput.value = '';
    saveTodos();
    renderTodos();
}
function sortByName(){
    todos.sort((a,b)=>a.text.localeCompare(b.text));
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
function toggleDropdown(index){
    const dropdown = document.getElementById(`dropdown-${index}`);
    dropdown.classList.toggle('show');
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
            <div class="task-header" onclick="toggleDropdown(${index})">
                ${todo.text}
            </div>
            <div class="dropdown-content" id="dropdown-${index}">
                <span class="time">${todo.time || '--'}</span>
                <span class="priority ${(todo.priority || "Low").toLowerCase()}">
                    ${todo.priority || "Low"}
                </span>
                <div class="actions">
                    <button class="yes-btn" onclick="toggleComplete(${index})">Yes</button>
                    <button class="no-btn" onclick="deleteTodo(${index})">No</button>
                </div>
            </div>
        `;
        list.appendChild(li);
    });
}
renderTodos();
document.getElementById('todo-input').addEventListener('input',()=>{
    document.getElementById('error-message').textContent = "";
});