document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        let taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
        } else {
            //Task Creation and Removal
            let newTask = document.createElement('li');
            newTask.textContent = taskText;

            let removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            removeButton.onclick = function() {
                taskList.removeChild(newTask);
            };

            newTask.appendChild(removeButton);

            taskList.appendChild(newTask);

            taskInput.value = "";
        }
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
    