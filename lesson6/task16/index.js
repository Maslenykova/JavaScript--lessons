function removeDuplicates(array) {
    if (!Array.isArray(array)) {
      return null;
    }
    let myArray = new Set();
    let arr = [];
    for( let i = 0; i < array.length; i += 1){
      myArray.add(array[i]);
      arr = [...myArray];
    }
    return arr;
  }
  console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 6]));
  console.log(removeDuplicates([1, 5, 7, 1, 2, 3, 4, 4, 3, 6]));
  console.log(removeDuplicates([]));