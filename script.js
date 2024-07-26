document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function addTask(taskText, save = true) {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function () {
            taskList.removeChild(taskListItem);
            updateTasksInLocalStorage(taskText, false);
        };

        taskListItem.appendChild(removeButton);
        taskList.appendChild(taskListItem);

        if (save) {
            updateTasksInLocalStorage(taskText, true);
        }
    }

    function updateTasksInLocalStorage(taskText, isAdd) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        if (isAdd) {
            storedTasks.push(taskText);
        } else {
            storedTasks.splice(storedTasks.indexOf(taskText), 1);
        }
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    loadTasks();

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            } else {
                alert('Please enter a task.');
            }
        }
    });
});
