let sum = 0;
export function add(num) {
    return (sum += num);
  }
  export function decrease(num) {
    return (sum -= num);
  }
 export function reset(){
  return sum = 0;
 };

 export function getMemo(){
  return sum;
 }

console.log( add(10));
 console.log(decrease(5));
 console.log(reset());
console.log(getMemo());