const baseUrl = 'https://671f7361e7a5792f052e4dbe.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

const updateButtonState = () => {
  const isValid = formElem.checkValidity();
  buttonElem.disabled = !isValid;
};

const inputs = formElem.querySelectorAll('.form-input');
inputs.forEach(inputElem => {
  inputElem.addEventListener('input', updateButtonState);
});

formElem.addEventListener('submit', event => {
  event.preventDefault();

  if (!formElem.reportValidity()) return;
  const formData = Object.fromEntries(new FormData(formElem));


  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
     
      formElem.reset();
      updateButtonState();
    })
    .catch(error => {
      alert('Failed to save user data');
      console.error(error);
    });
});