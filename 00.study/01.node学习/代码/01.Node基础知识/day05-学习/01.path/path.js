const path = require("path");
// console.log(path);

// extname 获取扩展名后缀
let extname = "http://c.biancheng.net";
let info = path.extname(extname);
// console.log(info); // .net

// resolve 将数组结构为一个绝对路径
let abPath = ["avs", "student", "123"];
let getPath = path.resolve(...abPath);
// console.log(getPath); // D:\01.Graduation\study\01.node学习\day05-学习\01.path\avs\student\123

// join 连接字符串
let absolutePath = path.join(__dirname, "file", "test", "node");
// console.log(absolutePath);

// parse 解析路径
let parsePath = path.parse(__filename);
// console.log(parsePath);
// {
//   文件所在磁盘
//   root: 'D:\\',
//   文件所在根目录
//   dir: 'D:\\01.Graduation\\study\\01.node学习\\day05-学习\\01.path',
//   运行文件
//   base: 'path.js',
//   文件扩展后缀
//   ext: '.js',
//   文件名称
//   name: 'path'
// }
