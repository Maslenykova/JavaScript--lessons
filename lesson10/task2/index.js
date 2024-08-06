const getParsedIntegers = arr => {
    let array = arr.map(elem => Number.parseInt(elem));
    return array;
  };
  
  const input = [1.23, 56, 4.3];
  console.log(getParsedIntegers(input));
  
  const getParsedIntegersV2 = arr => {
    let array = arr.map(elem => parseInt(elem));
    return array;
  };
  
  const input2 = [1.23, 56, 4.3, 13];
  console.log(getParsedIntegersV2(input2));
  
  const getParsedFloats = arr => {
    let array = arr.map(elem => Number.parseFloat(elem));
    return array;
  };
  
  const input3 = [1.23, 56, 4.3, 13];
  console.log(getParsedFloats(input3));
  
  const getParsedFloatsV2 = arr => {
    let array = arr.map(elem => parseFloat(elem));
    return array;
  };
  
  const input4 = [1.23, 56, 4.3, 13];
  console.log(getParsedFloatsV2(input4));
  