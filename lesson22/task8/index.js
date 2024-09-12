const textInput = document.querySelector('.text-input');

const handler = (event) =>{
    console.log(event.target.value);
};

textInput.addEventListener('change', handler);