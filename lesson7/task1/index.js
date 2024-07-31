const getSpecialNumbers = arr => 
    arr.filter(num => num % 3 === 0);

const array = [1, 3, 5, 6, 9, 18];
console.log(getSpecialNumbers(array));
console.log(array);