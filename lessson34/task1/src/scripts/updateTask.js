import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList } from "./tasksGateway.js";

export const onToggleTask = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;
  const tasksList = getItem("tasksList");
const { text, createData } = tasksList
.find(task => task.id === taskId);
const done = event.target.checked;

const updatedTask = {
  text,
  createData,
  done,
  finishDate: done ? new Date().toDateString() : null,
}

updateTask(taskId, updatedTask)
.then(() => getTasksList())
.then(newTasksList => {
  setItem('tasksList', newTasksList);
  renderTasks();
})

};
