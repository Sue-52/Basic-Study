// 导入方法
let { WriteFS, ReadFS } = require("./lcfs");
// 引入
let fs = require("fs");

// console.log(fs);
let txtPath = "all.txt";
fs.readdir("../../day02-学习/02.FilesReadAndWrite", (err, file) => {
  if (err) {
    return console.error(err);
  }
  // console.log(file); // [ '01.ImportOrExports', '02.FilesReadAndWrite', '03.Buffer' ]
  // 通过导入的方法将我们读取的文件目录写入在一个文件内
  file.forEach(async function (fileName, index) {
    let content = await ReadFS(
      `../../day02-学习/02.FilesReadAndWrite/${fileName}`
    );
    await WriteFS(txtPath, content);
  });
});
