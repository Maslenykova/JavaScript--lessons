
function sortAsc(array) {
    for (let i=0; i<array.length; i++) {
      for (let j=i; j<array.length; j++) {
          if (array[i] > array[j]) {
          let t = array[i];
          array[i] = array[j];
          array[j] = t;
        }
      }
    }
    return array;
  }
  
  function sortDesc(array) {
    for (let i=0; i<array.length; i++) {
      for (let j=i; j<array.length; j++) {
          if (array[i] < array[j]) {
          let t = array[i];
          array[i] = array[j];
          array[j] = t;
        }
      }
    }
    return array;
  }
  console.log(sortAsc([13,215,136,54,18]));
  console.log(sortDesc([13,215,136,54,18]));
  