import {getItem, setItem} from './storage.js';

const listElem = document.querySelector('.list');
const createCheckbox = document.createElement('input');
const createBtn = document.querySelector('.create-task-btn');

const compareTasks = (tasksList) =>{
   tasksList
  .sort((a, b) => a.done - b.done);
  return tasksList; 
}

const createListItem = ({ text, done, id}) => {
    const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkboxElem = createCheckbox({done, id});
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkboxElem, text);

      return listItemElem;
      }



export const renderTasks = () => {
    const tasksList = getItem('tasksList') || [];

    listElem.innerHTML = '';
    const tasksElems = tasksList
    .sort(compareTasks)
    .map(createListItem);
    listElem.append(...tasksElems);
    const newTasksList = listElem;
    setItem('tasksList', newTasksList);
}
  
