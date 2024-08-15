import {calc} from './calculator.js';

it ('should return the result of mathematical operations', () => {
    let result = calc('1 + 2')
    expect(result).toEqual('1 + 2 = 3');
    let result1 = calc('4 - 2')
    expect(result1).toEqual('4 - 2 = 2');
    let result2 = calc('1 * 2')
    expect(result2).toEqual('1 * 2 = 2');
    let result3 = calc('4 / 2') 
    expect(result3).toEqual('4 / 2 = 2');
});

it('should return null if string not a string', () => {
    let result = calc(1 + 1)
    expect(result).toEqual(null);
  });