function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let copy = [];
  for (let i = 0; i < arr.length; i += 1) {
    copy.push(arr[i]);
  }
  let newArr = [];
  for (let j = 0; j < copy.length; j += 0) {
    newArr.push(copy.pop(j));
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

 
  