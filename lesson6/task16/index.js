function removeDuplicates(array) {
    if (!Array.isArray(array)) {
      return null;
    }
    let newArray = [];
    for (let i = 0; i < array.length; i+=1) {
        for (let j = i + 1; j < array.length; j+=1) {
          if (array[i] === array[j] ) {
            newArray.push(array[i]);
          }
        }
      }
    return newArray;
  }
  console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 6]));
  console.log(removeDuplicates([1, 5, 7, 1, 2, 3, 4, 4, 3, 6]));
  console.log(removeDuplicates([]));