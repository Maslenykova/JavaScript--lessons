export function finishForm() {
    const form = document.querySelector('.login-form');
    const formElem = document.createElement('input');
    formElem.setAttribute('type', 'text');
    formElem.setAttribute('name', 'login');
    const passwordElem = document.querySelector('input');
    passwordElem.setAttribute('type', 'password');
    form.prepend(formElem);
  
    return form;
  }
  console.log(finishForm());

