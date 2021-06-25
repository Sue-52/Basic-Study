const fs = require("fs");

// fs.writeFile(
//   "file.txt",
//   "Infected\n",
//   { flag: "a", encoding: "utf-8" },
//   (err) => {
//     if (err) {
//       console.log("写入文件出错");
//     }
//     console.log("写入成功");
//   }
// );

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

async function writeList() {
  // 如果没找到文件会自动生成
  let first = await WriteFS("write.txt", "1.学习\n");
  console.log(first);
  let second = await WriteFS("write.txt", "2.考研\n");
  console.log(second);
  let third = await WriteFS("write.txt", "3.进步\n");
  console.log(third);
}
writeList();
