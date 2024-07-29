
function squareArray(arr) {
    let newArray = [];
    if(!Array.isArray(arr)){
          return null;
        }
        for (let i = 0; i < arr.length; i +=1){
          newArray.push(arr[i]*arr[i]);
        }
        return newArray;
  
  }
  
  console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
  console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
  console.log(squareArray([1])); // ==> [1]