/**
 * 输入数字 123 的时候，输出反转的数字 321
 * @param x number
 */
function reverse(x: number): number;
/**
 * 输入字符串 'hello' 的时候，输出反转的字符串 'olleh'
 * @param x string
 */
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  } else {
    return x;
  }
}

reverse("123");
reverse(123);
// reverse(null);
