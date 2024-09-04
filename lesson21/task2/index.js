export function getTitleElement(){
    let titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
};

getTitleElement();

export function getInputElement(){
let inputElement = document.querySelector('input[type="text"]');
console.dir(inputElement);
return inputElement;
}
getInputElement();