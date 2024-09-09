const textInput = document.querySelector('.text-input');

const hendler = () =>{
    console.log(textInput.value);
}

textInput.addEventListener('change', hendler);