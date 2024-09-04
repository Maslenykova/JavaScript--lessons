export function setTitle(text){
 const title = document.querySelector('.title').textContent;
document.querySelector('.title').textContent = text;
let titleText = document.title.textContent;
 return titleText; 
}

console.log(setTitle('Hello'));