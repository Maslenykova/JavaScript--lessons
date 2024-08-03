const user = {
    'John Doe': 19,
    Tom: 17,
    Bob: 18,
  };
  
  const copyObj = obj => {
    const copy = Object.assign({},obj);
    return copy;
  };
  
  console.log(copyObj(user));