const getTotalPrice = arr => {
  const result = arr.map(elem => Math.floor(elem * 100) / 100);
  const count = result.reduce((acc, el) => acc + el);
  return ('$'+ count.toFixed(2));
};

console.log( getTotalPrice([2, 3.511, 6.259, 8.246]) );
console.log(getTotalPrice([17.159]));

