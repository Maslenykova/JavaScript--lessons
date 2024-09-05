export function finishForm(){
    const elem = document.querySelector('.login-form');
    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'text');
    inputElem.setAttribute('name', 'login');
    const passwordElem = document.querySelector('input');
    passwordElem.setAttribute('type', 'password');

    elem.prepend(inputElem);
    return elem;
}

console.log(finishForm());