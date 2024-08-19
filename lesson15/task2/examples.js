import { createCalculator } from './index.js';

const calculator = createCalculator();
const calculatorNext = createCalculator();

console.log(calculator.getMemo()); // 0
console.log(calculator.add(3));
console.log(calculator.getMemo()); // 3
console.log(calculator.decrease(5));
console.log(calculator.getMemo()); // -2

console.log(calculatorNext.add(5));
console.log(calculatorNext.getMemo()); // 5

console.log(calculator.getMemo()); // -2
console.log(calculator.reset());
console.log(calculator.getMemo()); // 0

console.log(calculatorNext.getMemo()); // 5
