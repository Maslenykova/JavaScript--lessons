export function createButton(buttonText){
    const elementBody = document.querySelector('body');
         const bodyButton = document.createElement('button');
        bodyButton.textContent = buttonText;
        elementBody.append(bodyButton);
    return elementBody;
}


console.log(createButton('Send Email'));