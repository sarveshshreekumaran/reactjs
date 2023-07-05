//ES6//
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "sarvesh";
  }

  printName() {
    console.log(this.name);
  }
}

// const person = new Person();
// person.printName();
// person.printGender();

//ES7//
class Human {
  gender = "female";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "sarvesh";
  gender = "male";

  printName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printName();
person.printGender();
