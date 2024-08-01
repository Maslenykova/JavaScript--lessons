/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

function getKeys(obj) {
    for (let key in obj){
        console.log (key);
    }

  }

  const obj = {
    name: 'Tom',
    age: 17,
    adress: 'Ukraine',
    hobby: 'painting',
  } 
  console.log( getKeys(obj));