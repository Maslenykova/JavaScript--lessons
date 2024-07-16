
// function getPrimes(num){
// for (let i = 2; i <= num; i+=1) { 
//   for (let j = 2; j < i; j+=1) { 
//     if (i % j === 0)
//          break ;
//   }
//   console.log( i ); 
// }
// }
// getPrimes(50);


function getPrimes(num) {
  for (let i = 2; i <= num; i+=1){
    if (i % num === 0 && i / 1 === num){
      i = num;
    }
  }
  // console.log(i);
}
console.log(getPrimes(50));