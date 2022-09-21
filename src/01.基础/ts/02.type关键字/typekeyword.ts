/**
 * type 可以使用交叉类型符号与 interface 合并
 */
interface Movement {
  run(): void;
}

type Animal = {
  name: string;
} & Movement;

/**
 * type 可以被 interface 继承，但是 type 不可以继承 interface
 */
// type Animal = {
//   name: string;
// };

// interface Movement extends Animal {
//   run(): void;
// }

class Tortoise implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  run(): void {
    console.log(`${Tortoise.name} is running.`);
  }
}

let t = new Tortoise("乌龟");
t.run();
