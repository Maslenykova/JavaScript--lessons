function sum(from, to) {
    let sum = 0;
   for (let i = from; i <= to; i += 1){
    sum += i;
   }
   return sum;
  }
  
  function compareSums (firstFrom, firstTo, secondFrom, secondTo) {
   if ( sum(firstFrom,firstTo) > sum(secondFrom,secondTo) && firstFrom <= secondFrom && firstTo <= secondTo){
     return true;
   }
       else{
        return false;
       }
  }

console.log(sum(5, 10)); // ===> 45
console.log(sum(11, 11)); // ===> 11
  
console.log(compareSums(5, 10, 5, 10)); // ===> false
console.log(compareSums(5, 15, 3, 5)); // ===> true
console.log(compareSums(-2, 5, 5, 9)); // ===> false