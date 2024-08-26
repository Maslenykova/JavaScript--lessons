'use strict';
export function User(name, age){
this.name = name;
this.age = age;}
User.prototype.sayHi = function(){
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function(){
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function(newAge){
    
    if(newAge < 0){
        return false;
      }
    this.age = newAge;

  if(newAge >= 25){
    console.log(`New photo request was sent for ${this.name}`);
  }
  
  return newAge;
};


const user1 = new User('John', 15);
const user2 = new User('Bob', 30);
const user3 = new User('Anna', -1);
user1.sayHi();
user1.requestNewPhoto();
user2.setAge(-1);
console.log(user3.setAge(30));
