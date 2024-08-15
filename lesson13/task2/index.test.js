import sumOfNumbers, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should return array squred nambers', () => {
  const result = getSquaredArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it('should return only odd numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
});

it('should return sum of nambers', () => {
  const result = sumOfNumbers(2, 3);
  expect(result).toEqual(5);
});