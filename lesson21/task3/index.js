export function getItemsList(){
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}

getItemsList();

export function getItemsArray(){
    const nodeList = document.querySelectorAll('.tool');
    const elementsArray = Array.from(nodeList);
    console.dir(elementsArray);
    return elementsArray;
};

getItemsArray();