// 1. type 可以作为联合类型，而 interface 不可以

interface Dog {}
interface Cat {}

// type 可以联合 Dog 以及 Cat 两个接口
type Animal = Dog | Cat;

// 1. type 不允许重名，interface 重名自动合并

interface Dog1 {
  name: string;
}

interface Dog1 {
  age: number;
}

let animal: Dog1 = { name: "dog", age: 2 };
