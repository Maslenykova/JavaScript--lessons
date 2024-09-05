function finishList(){
    const list = document.querySelector('.list');
    const listItem = document.createElement('li');
    listItem.textContent = 8 ;
    list.append(listItem);
    const listItem1 = document.createElement('li');
    listItem1.textContent = 1 ;
    list.prepend(listItem1);
    
    const listItem5 = document.querySelector('.special');
    const listItem2 = document.createElement('li');
    listItem2.textContent = '4' ;
    list.appendChild(listItem2)
//    list.insertBefore(listItem2, listItem5);
    listItem2.before(listItem5);  
   

    const listItem3 = document.createElement('li');
    listItem3.textContent = 6 ;
    list.appendChild(listItem3);
    // list.insertAfter(listItem5,listItem3);
    listItem3.after(listItem5);

   

}

console.log(finishList());