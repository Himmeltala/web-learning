type TSex = { mal: string; famale: string };

interface ISex {
  mal: string;
  famale: string;
}

// keyof 只能作用于 type、interface、原始类型。
// type Union = keyof ISex;

function outputSex<T extends TSex, K extends keyof T>(obj: T, sex: K) {
  return obj[sex];
}

let o = outputSex({ mal: "男", famale: "女" }, "mal");

console.log(o);

type Index = "a" | "b" | "c";
type FromIndex = { [K in Index]?: number };

const good: FromIndex = { b: 1, c: 2 }; // OK
const bad: FromIndex = { b: 1, c: 2 }; // Error. 不能添加 d 属性
