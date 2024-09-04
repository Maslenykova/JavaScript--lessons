export function setTitle(text){
const title = document.querySelector('.title');
if (title){
    title.textContent = text;
}


console.log(title);

}

setTitle('Hello');