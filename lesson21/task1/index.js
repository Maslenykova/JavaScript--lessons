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
  const el = document.querySelector('.list__item');
    el.remove();
    const el1 = document.querySelector('.list__item_done');
    el1.remove();
  const listItemsElem = tasksList.sort((a,b) => a.done - b.done)
  .map(({text, done}) => { 
    const listItemElem = document.createElement('li');
    listItemElem.classList.add("list__item");
   
    if(done){
      listItemElem.classList.add('list__item_done');
    }
   
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = done;
    checkboxElem.classList.add("list__item-checkbox" );
  
    listItemElem.append(checkboxElem,text);
    return listItemElem;
  });
  listElem.append(...listItemsElem);

};

renderTasks(tasks);
