function prop<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let v = prop({ name: "大黄", age: 10 }, "name");
console.log(v);
