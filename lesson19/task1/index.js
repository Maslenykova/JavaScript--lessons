'use strict';

export const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
export const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    console.log(this.move());
  },
  stopMachine() {
    console.log(this.stop());
    console.log(`${this.name} lifting anchor down.`);
  },
};
Object.setPrototypeOf(ship, vehicle);


ship.startMachine();
ship.stopMachine();
