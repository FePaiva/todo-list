const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const renderTasks = () => {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const taskEl = document.createElement('li');
    taskEl.classList.add('task');
    taskEl.innerHTML = task;
    taskList.appendChild(taskEl);
  });
};

const addTask = () => {
  if (taskInput.value === '') return;
  tasks.push(taskInput.value);
  taskInput.value = '';
  renderTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

addTaskBtn.addEventListener('click', addTask);

renderTasks();
