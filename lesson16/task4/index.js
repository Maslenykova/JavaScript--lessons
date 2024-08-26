/* eslint-disable */
let foo = 1;

function bar() {
  if (!foo) {
     foo = 10;
  }

  return foo;
}
foo = bar();
export default foo;



// function bar() {
//    var foo = 1;
//   if (!foo) {
//     var foo = 10;
//   }

//   return foo;
// }


console.log(bar());
console.log(foo);