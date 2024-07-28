document.addEventListener('DOMContentLoaded', function () {
    // Selecting DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add tasks function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskListItem = document.createElement('li');
        taskListItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function () {
            taskList.removeChild(taskListItem);
        };

        taskListItem.appendChild(removeButton);
        taskList.appendChild(taskListItem);

        taskInput.value = '';
    }

    //Event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
