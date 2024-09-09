export function finishList() {
    const list = document.querySelector('.list');
    const li1 = document.createElement('li');
    li1.textContent = '1';
    const li4 = document.createElement('li');
    li4.textContent = '4';
    const li6 = document.createElement('li');
    li6.textContent = '6';
    const li8 = document.createElement('li');
    li8.textContent = '8';

    list.prepend(li1);

    const listItemSpecial = document.querySelector('.special');
    listItemSpecial.before(li4);
    listItemSpecial.after(li6);
  
    list.append(li8);
    
  }



finishList();