const flatArray = arr =>
    arr
      .reduce((acc, elem) => {
        return acc.concat(elem);
      }, [])
      .slice()
      .sort((a, b) => a - b);
  
  const array = [1, [6, 4, 5], 2, 8, [9]];
  console.log(flatArray(array));