const button = document.querySelector('.search__btn');

const textInput = document.querySelector('.search__input');

const hendler = () =>{
    console.log(textInput.value);
}

button.addEventListener('click', hendler);

