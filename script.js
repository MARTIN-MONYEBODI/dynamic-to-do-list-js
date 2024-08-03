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
        }
         
        if(taskTest !=== ""){
            //Task Creation and Removal
            let li = document.createElement('li');
            li.textContent = taskText;

            let button = document.createElement('button');
            button.textContent = "Remove";
            button.classList.add('remove-btn');

            removeButton.onclick = function() {
                taskList.removeChild(li);
            };

            newTask.appendChild(button);

            taskList.appendChild(li);

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
    