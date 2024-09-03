'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];


const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  const listItemsElem = tasksList.map(({text}) => {
    listItemsElem.sort((a,b) => a.done - b.done);
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.classList.add("list__item-checkbox" );
    const listItemElem = document.createElement('li');
    listItemElem.classList.add("list__item");
    listItemElem.append(checkboxElem,text);
    return listItemElem;
  });
  listElem.append(...listItemsElem);

};

renderTasks(tasks);
