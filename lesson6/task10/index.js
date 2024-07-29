const arr = [1, 2, 3, 4, 5];
function cloneArr(arr){
    let copy = [];
    if (!Array.isArray(arr)){
     return null;
 }

 for (let i = 0; i < arr.length; i+= 1){
    copy.push(arr[i]);
 }
 return copy;
}
console.log(cloneArr(arr));
console.log(arr);