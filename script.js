document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    loadTasks();

    // Initialize and Load Tasks
    

    // Create the addTask Function
    function addTask(taskText, save = true) {
        if (!taskText) {
            taskText = taskInput.value.trim();
        }
        if (taskText === "") {
            alert("Please enter a task.");
        } else {
            let newTask = document.createElement('li');
            newTask.textContent = taskText;
            let removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
            removeButton.onclick = function() {
                taskList.removeChild(newTask);
                removeTaskFromLocalStorage(taskText);
            };
            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);
            taskInput.value = "";
            if (save) {
                saveTaskToLocalStorage(taskText);
            }
        }
    }

    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    addTask();
});
    