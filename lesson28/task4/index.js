export const compose =
  (...func) =>
  value => {
    return func.reduce((acc, funcs) => funcs(acc), value);
  };

const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

const superFunc = compose(add2, square, half);

console.log(superFunc(2));