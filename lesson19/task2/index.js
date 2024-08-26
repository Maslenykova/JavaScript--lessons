'use strict';

export function getOwnProps(obj) {
    let newArr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      newArr.push(prop);
    }
  }
  return newArr;
};

const vehicle = {
    name: 'Argo',
    age: 17,
    move() {
      return `${this.name} is moving`;
    },
    stop() {
      return `${this.name} stopped`;
    },
  };

  console.log(getOwnProps(vehicle));
