const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
  ];

const listElem = document.querySelector('.list');
const createTaskBtn = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');

const renderTasks = tasksList => {
  listElem.innerHTML = ''; 

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done) 
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.index = index; 

      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

listElem.addEventListener('click', event => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return; 
  }

  const taskIndex = event.target.dataset.index; 
  tasks[taskIndex].done = !tasks[taskIndex].done; 

  renderTasks(tasks);
});
createTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim(); 

  if (taskText === '') {
    return;
  }

  tasks.push({ text: taskText, done: false });

  renderTasks(tasks); 

  taskInput.value = '';
});

renderTasks(tasks);
