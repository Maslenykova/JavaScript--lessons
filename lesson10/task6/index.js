const getRandomNumbers = (length, from, to) => {
    let arr = [];
    arr.length = length;
    let min = Math.ceil(from);
    let max = Math.floor(to);
    if (from > to || min > max) {
      return null;
    } else {
      const randomArr = [...arr].map(() => Math.round(Math.random() * (max - min) + min));
      return randomArr;
    }
  };
  
  console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
  console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
  console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
  console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
  console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]
  console.log(getRandomNumbers(50, 90.5, 95));
  
  console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
  console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
  console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
  