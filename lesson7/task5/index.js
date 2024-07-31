const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
      return null;
    }
  return arr.map(num => num % 2 === 0 ? num + delta : num);
  }
  
  const  array = [2, 5, 6, 8, 11, 9, 4];
  console.log(increaseEvenEl(array, 20)); 
  console.log( array);

