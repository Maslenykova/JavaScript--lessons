'use strict';

export const wallet = {
  transactions: [1, 4, 5, 65, 78, 9],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());