import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";

export const onCreateTask = () => {
  const taskTitleInputElement = document.querySelector(".task-input");
  const text = taskTitleInputElement.value;
  if (!text) {
    return;
  }
  taskTitleInputElement.value = "";
  const tasksList = getItem("tasksList") || [];
  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem("tasksList", newTasksList);

  renderTasks();
};
