function clearList(){
    const listElem = document.querySelector('.categories');
    listElem.innerHTML = '';
    return listElem;
}

console.log(clearList());