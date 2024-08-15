export const reverseArray = arr => {
    if (!Array.isArray(arr)) {
      return null;
    }
    return arr.slice().reverse();
  };
  const array = [9, 2, 5, 6, 1];
  console.log(reverseArray(array));
  console.log(array);