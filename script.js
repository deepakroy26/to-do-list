document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const task = input.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);

            input.value = '';
        }
    }
});
