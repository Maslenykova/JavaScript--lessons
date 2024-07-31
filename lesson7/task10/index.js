function arrAverage(arr) {
    if (!Array.isArray(arr)) {
      return null;
    }
    const sum = arr.reduce((acc, num) => acc + num);
    return (sum / arr.length);
  }
  const array = [2, 5, 6, 3];
  
  console.log(arrAverage(array));