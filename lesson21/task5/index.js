 export function setTitle(text){
 const title = document.querySelector('.title').textContent;
document.querySelector('.title').textContent = text;
 return title; 
}

console.log(setTitle('Hello'));