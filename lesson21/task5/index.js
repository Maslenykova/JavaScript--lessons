 export function setTitle(text){
 const title = document.querySelector('.title');
let titleText = document.title.textContent;
titleText = text;
 return titleText; 
}

console.log(setTitle('Hello'));