// Readline是Node.js里实现标准输入输出的封装好的模块
//  通过这个模块我们可以以逐行的方式读取数据流。
//  使用require(“readline”)可以引用模块。
let readline = require("readline");
// console.log(readline);
// 引入读取文件方法，直接生成文件
let { WriteFS } = require("./lcfs");

// 生成接口
var rl = readline.createInterface({
  // 输入
  input: process.stdin,
  // 输出
  output: process.stdout,
});
// promise封装question方法
function question(title) {
  return new Promise((resolve, reject) => {
    rl.question(title, (answer) => {
      resolve(answer);
    });
  });
}

async function createPage() {
  var name = await question("name:");
  var version = await question("version:");
  var description = await question("description:");
  var main = await question("main:");
  // 内容:文件的主体内容
  let content = `{
  "name": "${name}",
  "version": "${version}",
  "description": "${description}",
  "main": "${main}",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
`;
  await WriteFS("package.json", content);
  // 停止程序的运行
  rl.close();
}
createPage();

rl.on("close", () => {
  process.exit(0);
});
