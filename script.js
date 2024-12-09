const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskTitle = document.getElementById('taskTitle');
const currentDateTime = document.getElementById('currentDateTime');

let taskId = 1;

// Display current date and time
function updateDateTime() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  currentDateTime.innerText = `Date: ${dateString} | Time: ${timeString}`;
}

setInterval(updateDateTime, 1000);

// Add Task
addTaskBtn.addEventListener('click', () => {
  const title = taskTitle.value.trim();
  if (title === '') {
    alert('Task title cannot be empty!');
    return;
  }
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  addTask(title, dateString, timeString);
  taskTitle.value = '';
});

function addTask(title, date, time) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <div>
      <span>Task ${taskId}: ${title}</span>
      <p class="task-meta">Added on: ${date} at ${time}</p>
    </div>
    <div>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;
  taskList.appendChild(li);
  taskId++;
}

// Edit Task
function editTask(button) {
  const taskItem = button.parentElement.parentElement;
  const taskText = taskItem.querySelector('span').innerText;
  const newTitle = prompt('Edit Task', taskText.split(': ')[1]);
  if (newTitle !== null && newTitle.trim() !== '') {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();
    taskItem.querySelector('span').innerText = `Task ${taskId}: ${newTitle}`;
    taskItem.querySelector('.task-meta').innerText = `Edited on: ${dateString} at ${timeString}`;
  }
}

// Delete Task
function deleteTask(button) {
  const taskItem = button.parentElement.parentElement;
  taskList.removeChild(taskItem);
}
