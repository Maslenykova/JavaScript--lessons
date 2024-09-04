export function setTitle(text){
 const title = document.querySelector('.title');
 return title.textContent = text;
}

console.log(setTitle('Hello'));