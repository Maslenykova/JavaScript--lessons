import {reverseArray} from './index.js';
it('shuold reverse array', () => {
    let result = reverseArray([1, 2, 3, 4, 5])
    expect(result).toEqual([5, 4, 3, 2, 1]);
});
it('should return null if array is not array', () => {
    let result = reverseArray('text')
    expect(result).toEqual(null);
  });