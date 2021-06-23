var str = "instroduce";
// const buf = Buffer.from(str);
// console.log(buf); // <Buffer 69 6e 73 74 72 6f 64 75 63 65> 十六进制
// 用于预填充新 Buffer 的值
// const buf = Buffer.alloc(10); // 开辟一个10个字符的内存空间
// console.log(buf);
const buf = Buffer.allocUnsafe(10); // 开辟一个10个字符的内存空间
console.log(buf);
