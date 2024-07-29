const getSubArray = (arr, numberOfElements) => {
    let copy = [];
 for (let i = 0; i < arr.length; i+= 1){
    copy.push(arr[i]);
 }
 copy.length = numberOfElements
   return copy;

}

console.log(getSubArray([11, 4, 8, 3], 2));
console.log(getSubArray([1, 2, 3, 4, 5], 3));