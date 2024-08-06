const getFiniteNumbers = arr => {
    const massiv = arr.filter(el => Number.isFinite(el));
    return massiv;
  };
  
  const arr = [2, 4, 5, 7, 9, NaN];
  console.log(getFiniteNumbers(arr));
  
  const getFiniteNumbersV2 = arr => {
    const massiv = arr.filter(el => isFinite(el));
    return massiv;
  };
  
  const arr2 = [2, 4, 5, 7, 9, Infinity];
  console.log(getFiniteNumbers(arr2));
  
  const getNaN = arr => {
    const massiv = arr.filter(el => Number.isNaN(el));
    return massiv;
  };
  
  const arr3 = [2, 4, 5, 7, 9, 'taxt'];
  console.log(getNaN(arr3));
  
  const getNaNV2 = arr => {
    const massiv = arr.filter(el => isNaN(el));
    return massiv;
  };
  
  const arr4 = [2, 4, 5, 7, 9, 'text'];
  console.log(getNaNV2(arr4));
  
  const getIntegers = arr => {
    const massiv = arr.filter(el => Number.isInteger(el));
    return massiv;
  };
  
  const arr5 = [2.32, 4.5, 5, 7, 9, 'text'];
  console.log(getIntegers(arr5));
  