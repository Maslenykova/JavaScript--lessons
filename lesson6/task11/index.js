function checker(arr) {
  let sumOfElem = 0;
  let max;
  let min = arr[0];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < min) {
       min = arr[i];
      sumOfElem += min;
    } else {
      max = arr[i];
      sumOfElem += max;
    }
  }

  if (sumOfElem > 1000) {
    return true;
  } else {
     return false;
   }
}

console.log(checker([1, 2, 3, 4, 5, 100]));
console.log(checker([1, 2, 3, 4, 5, 1000]));
console.log(checker([1, 2, 3, 4, 5, 300]));
