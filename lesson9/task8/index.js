/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */
function addPropertyV1(obj, key, value) {
     obj[key] = value;
     return obj;
  }
  const transaction = {
    value: 170,
  };
 console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

 const transaction1 = {
    value: 170,
  };

  function addPropertyV2(obj, key, value) {
    const obj1 = {[key] : value,};
    const newObj = Object.assign(obj, obj1);
    return newObj;
  }
  console.log(addPropertyV2(transaction1, 'currency', 'USD')); 

  const transaction2 = {
    value: 170,
  };

  function addPropertyV3(obj, key, value) {
    const obj1 = {[key] : value,};
    const newObj = Object.assign({},obj, obj1);
    return newObj;
  }
  console.log(addPropertyV2(transaction2, 'currency', 'USD')); 

  const transaction3 = {
    value: 170,
  };
  function addPropertyV4(obj, key, value) {
    const obj1 = { ...obj, [key]: value };
    return obj1;
  }
  console.log(addPropertyV4(transaction2, 'currency', 'USD')); 