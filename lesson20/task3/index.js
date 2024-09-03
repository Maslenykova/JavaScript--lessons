'use strict';

export class Wallet{
    constructor(){
        this._balance = 0;
    }
  

  getBalance(){
    return this._balance;
  }

  deposit(amount){
    this._balance += amount;
  }

  withdraw(amount){
     if(amount > this._balance){
    console.log('No enough funds');
    return;
   }
   this._balance -= amount;
  }
}

const userWallet = new Wallet;
console.log(userWallet.getBalance());
console.log(userWallet.deposit(50));
console.log(userWallet.getBalance());
console.log(userWallet.withdraw(15));
console.log(userWallet.getBalance());
console.log(userWallet.withdraw(65));

