interface Person {
  name: string;
  age: number;
}

interface Actions {
  run(): void;
  sleep(): void;
}

type XiaoMingType = Person & Actions;

class XiaoMing implements XiaoMingType {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  run(): void {
    console.log("xiaoming is running.");
  }
  sleep(): void {
    console.log("xiaoming is sleeping.");
  }
}

let x = new XiaoMing("xiaoming", 10);

x.run();
