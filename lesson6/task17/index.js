function uniqueCount(arr) {
  let count = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  let myArray = new Set();
  let array = [];
  for( let i = 0; i < arr.length; i += 1){
    myArray.add(arr[i]);
    array = [...myArray];
  }
  return array.length;
}
 console.log(uniqueCount([1, 1, 2, 3, 4, 4, 6])); 
// ===> 5
console.log(uniqueCount([1, 5, 7, 1, 2, 3, 4, 4, 3, 6]));
console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));
  