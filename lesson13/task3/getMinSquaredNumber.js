export default arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null;
    }
    let squreArr = arr.map(num => num * num);
    let min = Math.min(...squreArr);
    return min;
  };
  

  