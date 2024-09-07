document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('taskName').value;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ taskName });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    loadTasks();
    document.getElementById('taskForm').reset();
});

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.taskName;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            loadTasks();
        };
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

loadTasks();





