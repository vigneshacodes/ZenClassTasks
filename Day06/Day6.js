//Write a “person” class to hold all the details.

class Person {
    constructor(_x, _y, _z) {
      this.name = _x;
      this.dob = _y;
      this.age = _z;
    }
  }
  
  let student1 = new Person("Vignesh", "05th Feb 1998", 25);
  
  console.log("the Person Class-Object student1 is", student1);
  
  
  //write a class to calculate the uber price.
  
  class Uber_class {
    constructor(_a, _b, _c) {
      this.name = _a;
      this.mobile = _b;
      this.kms = _c;
    }
  
    get price() {
      return this.kms * 20;
    }
  }
  
  
  
  let p1 = new Uber_class("Vicky", 9940142465, 78);
  
  console.log(`${p1.name} has travelled ${p1.kms} Kms and the fare is Rs.${p1.price}`);
  