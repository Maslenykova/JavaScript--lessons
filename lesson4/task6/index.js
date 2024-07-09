let sum = 0;
for (let i = 0; i <= 1000; i += 1) {
  sum += i;
}
const div = sum / 1234;
const mod = sum % 1234;
console.log(Boolean(div > mod));
