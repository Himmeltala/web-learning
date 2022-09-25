interface Dog {
  wang(): void;
}

interface Cat {
  miao(): void;
}

type Animal = Dog | Cat;

let animal: Animal = {
  wang() {},
  miao() {}
};

let Person = {
  name: "小明",
  age: 10
};

type P = typeof Person;

console.log(typeof Person);
