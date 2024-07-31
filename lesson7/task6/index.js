const cloneArr = arr => {
    if (!Array.isArray(arr)) {
      return null;
    }
    return arr.slice();
  };
  
  const array = [1, 3, 4, 6, 7, 8];
  console.log(cloneArr(array));
  console.log(array);