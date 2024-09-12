const taskStatus = document.querySelector(".task-status");
const handler = (event) =>{
 console.log( event.target.checked);
}
taskStatus.addEventListener('change', handler);