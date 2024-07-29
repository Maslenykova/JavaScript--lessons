
const checkSum = arr => {
    let sumOfElemets = 0;
    if(!Array.isArray(arr)){
           return null;
         }
         for (let i = 0; i < arr.length; i +=1){
           sumOfElemets += arr[i];
         }
         if (sumOfElemets > 100){
           return true;
         }
         else {
           return false;
         }
 };
 
 console.log(checkSum([10, 10, 10])); // ===> false
 console.log(checkSum([10, 99, 1])); // ===> true
 console.log(checkSum([-6, -3, 200])); // ===> true
 