import getMin from './getMinSquaredNumber.js';


it('should return min squred nambers from array', () => {
    let result = getMin([1, 2, 3, 4])
    expect(result).toEqual(1);
  });
  it('should return null if array is not array', () => {
    let result = getMin('text')
    expect(result).toEqual(null);
  });
  it('should return null if array is ampty', () => {
    let result = getMin([])
    expect(result).toEqual(null);
  });


