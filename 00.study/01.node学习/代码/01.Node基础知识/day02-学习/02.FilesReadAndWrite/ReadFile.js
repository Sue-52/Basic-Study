const fs = require("fs");
// console.log(fs);

// 读写数据
// 异步地打开文件：fs.openSync(path,flag,calback)
// path: 代表你要读取或写入的文件所在目录
// flag: 代表你所要执行的操作
var fd = fs.openSync("./file.txt", "r");
// console.log(fd); // 读取的内容为文件所在的内存
// 在内存中开辟空间
// 该类用来创建一个专门存放二进制数据的缓存区
var buf = Buffer.alloc(20);
// console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
// 使用readFileSyns读取
// var content = fs.readFileSync("./file.txt", { flag: "r" }); // <Buffer 64 61 79 64 61 79 64 72 65 61 6d>
var content = fs.readFileSync("./file.txt", { flag: "r", encoding: "utf-8" });
// console.log(content);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data);
});
// fs.readFile;

// 封装readFile异步方法
// 使用promise封装，为了不用每次都重新写一遍方法直接调用函数
function ReadFS(path) {
  // 返回promise实例
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { flag: "r", encoding: "utf-8" }, (err, data) => {
      if (err) {
        // 失败时的的报错
        reject(err);
        return;
      }
      // 成功的返回
      resolve(data);
    });
  });
}
async function getFile() {
  let FirstFile = await ReadFS("./file.txt");
  console.log(FirstFile);
}
getFile();
