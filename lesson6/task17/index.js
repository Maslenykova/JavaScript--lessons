function uniqueCount(arr) {
    let count = 0;
    if (!Array.isArray(arr)) {
      return null;
    }
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[i] === arr[j]) {
          count += 1;
          break;
        }
      }
    }
    return count;
  }

  console.log(uniqueCount([1, 1, 2, 3, 4, 4, 6]));
  console.log(uniqueCount([1, 5, 7, 1, 2, 3, 4, 4, 3, 6]));
  console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));
  