export function setButton(buttonText){
    const elementBody = document.querySelector('.body');
    const bodyButton = document.createElement('button');
    bodyButton.innerHTML = buttonText;
    elementBody.append(bodyButton);
    return elementBody;
}

console.log(setButton('button text'));