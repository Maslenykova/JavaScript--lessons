function squareArray(arr) {
    if (!Array.isArray(arr)) {
      return null;
    }
    return arr.map(elem => elem * elem);
  }
  
  
const arr1 = [0, 0, 1, 3];
const arr = [10, 10, 10];
const arr2 = [-1, 0, -1, 1];
  console.log(squareArray(arr)); // ===> [100, 100, 100]
  console.log(squareArray(arr1)); // ===> [0, 0, 1, 9]
  console.log(squareArray(arr2)); // ===> [1, 0, 1, 1]
  console.log(arr);
  console.log(arr1);
  console.log(arr2);