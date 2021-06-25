// 引入
let fs = require("fs");
// promise封装写入方法
function WriteFS(path, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, content, { flag: "a", encoding: "utf-8" }, (err) => {
      if (err) {
        reject(err);
        // console.log("写入文件出错");
      }
      resolve("写入成功");
      // console.log("写入成功");
    });
  });
}

// 封装readFile异步方法
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

module.exports = {
  WriteFS,
  ReadFS,
};
