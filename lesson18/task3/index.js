'use strict';

export function sumOfSquares (arr) {
  return arr.reduce((acc,elem) => {return acc + (elem * elem)}, 0);
}

console.log(sumOfSquares([1, 2, 3]));

export function sumOfSquares1 () {
    return [...arguments].reduce((acc,elem) => {return acc + (elem * elem)}, 0);
  }
  
  console.log(sumOfSquares1(1, 2, 3));