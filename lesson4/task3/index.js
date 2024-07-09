const start = 1;
const end = 88;
let result = 0;

for (let i = 1; i <= end; i += 1) {
    const res = result;
  if (i % 5 === 0) {
    console.log(i);}
    else if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  }
}
