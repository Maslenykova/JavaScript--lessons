const cleanTransactionsList = array => {
    let copy = array.slice();
    let arr = copy.filter(number => Number(number)).map(num => Number(num));
    let a = [];
    for (let i = 0; i < arr.length; i += 1) {
      a.push(arr[i].toFixed(2));
    }
    return a.map(elem => '$' + elem);
  };
  
  const test = [' 1.9 ', '16.4', 17, ' 1 dollar '];
  console.log(cleanTransactionsList(test));
  console.log(test);