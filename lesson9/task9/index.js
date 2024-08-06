

function buildObject(keysList, valuesList) {
    let obj={};
for(let i = 0; i<keysList.length; i +=1){
    obj[keysList[i]]= valuesList[i];
}
return Object.assign(obj);
}




const keys = ['name', 'address', 'age'];
const values = ['Vasyl', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }
console.log(result);
const keys1 = ['id', 'name', 'age'];
const values1 = [19, 'Kat', 17];
const result1 = buildObject(keys1, values1);
console.log(result1);
const keys2 = ['id', 'name', 'age', 'adress'];
const values2 = [19, 'Kat', 17, 'Ukraine'];
const result2 = buildObject(keys2, values2);
console.log(result2);