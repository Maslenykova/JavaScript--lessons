import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList, deleteTask } from "./tasksGateway.js";

export const onDeleteTask = (event) => {
  const taskId = event.target.closest(".list-item").querySelector(".list-item__checkbox").dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

export const onToggleTask = (event) => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');
  const isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
  const isDoneItem = event.target.classList.contains('list-item_done');


  if(isDeleteBtn || isDoneItem){
    onDeleteTask(event);
    return;
  }

  if (!isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;
  const tasksList = getItem("tasksList");
  const { text, createData } = tasksList.find((task) => task.id === taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    createData,
    done,
    finishDate: done ? new Date().toDateString() : null,
};

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};


