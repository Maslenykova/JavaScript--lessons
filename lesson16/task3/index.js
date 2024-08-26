

  function createArrayOfFunctions (num) {
    const arr = [];

  if (num === undefined) {
    return [];
  }
  if (typeof num !== 'number') {
    return null;
  }
for (let i = 0; i < num; i += 1) {
  arr[i] = function () {
    return i;
  };
}
return arr;
}

console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions(10)[3]());
console.log(createArrayOfFunctions());