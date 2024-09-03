'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  constructor(price, city, type) {
    this._id = this.generateId();
    this._price = price;
    this._dateCreated = new Date();
    this._isConfirmed = false;
    this._dateConfirmed = null; 
    this._city = city;
    this._type = type;

}

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  };

  confirmOrder() {
    if (!this._isConfirmed) {
        this._isConfirmed = true;
        this._dateConfirmed = new Date(); 
    }
}

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

const userOrder = new Order;

console.log(userOrder);
