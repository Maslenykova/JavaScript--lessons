export function setTitle(text){
const title = document.querySelector('.title');
title.textContent = text;

console.log(title);

}

setTitle('Hello');