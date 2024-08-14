import {getEvenNumbers} from './index.js';

it('should return even numbers', () =>{
    const result = getEvenNumbers([1, 2, 3, 4]);
    expect(result).toEqual([2,4])});
