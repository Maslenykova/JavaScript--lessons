
const getValueWithDalay = (value, delay) => 
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });


const asyncNum1 = getValueWithDalay(56, 1000);
const asyncNum2 = getValueWithDalay(undefined, 2000);
const asyncNum3 = getValueWithDalay(10, 3000);

const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3).then(result => console.log(result));
