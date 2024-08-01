/* eslint-disable*/

const pickProps = (obj, props) => {
    let newObj = {};
    for(let key in obj){
      if(props.includes(key)){
        newObj[key] = obj[key];
     }
      }
    
    return newObj;
    
};
  
  
 console.log(pickProps({ a: 1, b: 2, c: 3, }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
  