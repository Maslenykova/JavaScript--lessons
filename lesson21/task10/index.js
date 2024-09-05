export function finishForm(){
    const elem = document.querySelector('.login-form');
    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'text');
    inputElem.setAttribute('name', 'login');
    const passwordElem = document.querySelector('input');
    elem.prepend(inputElem);
    passwordElem.setAttribute('type', 'password');
}

console.log(finishForm());