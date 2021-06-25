const fs = require("fs");
// createWriteStream写入流（文件路径，options选项）
// 一个对象中包含了很多方法
var ws = fs.createWriteStream("test.txt", { flags: "w", encoding: "utf-8" });
// console.log(ws);
// 文件打开
ws.on("open", () => {
  console.log("1-文件打开了");
});
// 在文件中写入相应内容
ws.write("HelloWorld", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("2-内容以写入");
});
// 文件结束
ws.end(() => {
  console.log("4-文件结束了");
});
// 文件关闭
ws.on("close", () => {
  console.log("3-文件关闭了");
});
