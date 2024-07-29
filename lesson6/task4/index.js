function swap(numbers) {
    const [first, ...rest] = numbers;
    return [...rest, first];
  }
  
  function swapManual(numbers) {
      let arr = [];
      for ( let i = 1; i < numbers.length; i += 1){
          arr.push(numbers[i]); 
      }
      arr.push(numbers[0]);
      return arr;
    }
  
  console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
  console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
  
