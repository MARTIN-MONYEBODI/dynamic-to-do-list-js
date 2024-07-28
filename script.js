document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // AddTask function 
    function addTask(taskText, save = true) {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function () {
            taskList.removeChild(taskListItem);
            updateTasksInLocalStorage();
        };

        taskListItem.appendChild(removeButton);
        taskList.appendChild(taskListItem);

        if (save) {
            updateTasksInLocalStorage();
        }
    }

        // Update tasks in Local Storage
        function updateTasksInLocalStorage() {
            const tasks = Array.from(taskList.children).map(task => task.textContent);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    
        addButton.addEventListener('click', function () {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        });
    
        taskInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                const taskText = taskInput.value.trim();
                if (taskText !== '') {
                    addTask(taskText);
                    taskInput.value = '';
                }
            }
        });
    
        // Load tasks from Local Storage when the page loads
        loadTasks();
    });
    