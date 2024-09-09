const textStatus = document.querySelector('.task-status');

const hendler = () =>{
   console.log(textStatus.checked);
}

textStatus.addEventListener('change', hendler);