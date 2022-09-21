type Length = { length: number };

function calcArrayLength<T extends Length>(source: T): number {
  return source.length;
}

let l = calcArrayLength([1, 2, 3, 4]);

console.log(l);
