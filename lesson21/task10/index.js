export function finishForm(){
    const finishForm = document.querySelector('.login-form');
    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'text');
    inputElem.setAttribute('name', 'login');
    const passwordElem = document.querySelector('input');
    passwordElem.setAttribute('type', 'password');
    finishForm.prepend(inputElem);
    return finishForm;
}

console.log(finishForm());