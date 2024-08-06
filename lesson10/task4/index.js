const getMaxAbsoluteNumber = arr => {
    if (arr.length === 0 || !Array.isArray(arr)){
        return null;
       }

       let absolute = arr.map(elem=>Math.abs(elem));
       let max = Math.max(...absolute);
      return max;
      
     
  };
  
  // examples
  console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
  console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
  console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
  console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
  console.log(getMaxAbsoluteNumber([ ]));
  