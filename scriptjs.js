const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        window.alert("Please Fill The Input");
        return;
    }

    const timestamp = new Date().toLocaleString();

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${taskText}</span>
        <span class="timestamp">Added: ${timestamp}</span>
        <button class="delete-btn">Delete</button>
    `;

    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', deleteTask);

    const checkbox = listItem.querySelector('.task-checkbox');
    checkbox.addEventListener('change', markAsCompleted);

    pendingTasksList.appendChild(listItem);

    taskInput.value = '';
}

function deleteTask(event) {
    const listItem = event.target.parentElement;
    listItem.remove();
}

function markAsCompleted(event) {
    const checkbox = event.target;
    console.log(checkbox);
    console.log(checkbox.parentElement);
    const listItem = checkbox.parentElement;
    const timestampSpan = listItem.querySelector('.timestamp');

    if (checkbox.checked) {
        listItem.classList.add('completed-task');
        timestampSpan.innerHTML = `Completed: ${new Date().toLocaleString()}`;
        completedTasksList.appendChild(listItem);
    } else {
        listItem.classList.remove('completed-task');
        timestampSpan.innerHTML = `Added: ${new Date().toLocaleString()}`;
        pendingTasksList.appendChild(listItem);
    }
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

