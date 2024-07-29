const includes = (arr, num) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === num) {
        return true;
      }
    }
      return false;
    
  };
  console.log(includes([1, 4, 8, 3], 3)); // ==> true
  console.log(includes([1, 4, 8, 3], 5)); // ==> false