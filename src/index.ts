// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// const person = {
//   name: "Jay",
//   age: 27,
//   gender: "male"
// };

const me = new Human("Park", 28, "male");

const sayHi = (person: Human): string => {
  return `Hello, ${person.name}, you are ${person.age} years old ${person.gender}`;
};

console.log(sayHi(me));

export {};
