## day03 的 Node 学习

### Node 读取文件目录

**语法：**

```js
fs.readdir(path, callback);
```

**参数：**

- path 参数：文件路径
- callback 参数：回调函数，带有两个参数 err，file；err 为错误信息，file 为目录下的文件数组列表

**readdir.js**

```js
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
```

**lcfs.js**

```js
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
```

### Node 删除目录

**语法：**

```js
fs.rmdir(path, callback);
```

**参数：**

- path 参数：文件路径
- callback 参数：回调函数，没有参数

**rmdir.js**

```js
const fs = require("fs");

fs.rmdir("123", () => {
  console.log("删除成功");
});
```

### Node 的逐行读取

**语法：**
readline 模块提供了一个接口，用于一次一行地读取可读流（例如 process.stdin）中的数据。
使用 require(“readline”)可以引用模块

应用场景：

- 文件逐行读取：比如说进行日志分析。
- 自动完成：比如输入 npm，自动提示"help init install"。
- 命令行工具：比如 npm init 这种问答式的脚手架工具。

```js
// 导入逐行读取方法
let readline = require("readline");
// 创建接口
var rl = readline.createInterface({
  // 输入
  input: process.stdin,
  // 输出
  output: process.stdout,
});

// 使用以封装好的question方法
rl.question("你如何看待 Node.js 中文网？", (answer) => {
  // TODO：将答案记录在数据库中。
  console.log(`感谢您的宝贵意见：${answer}`);
  // 最后停止程序运行
  rl.close();
});
```

例子：通过提问的方式生成一个文件（调用之前封装的读取文件的模块）

```js
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
```

**例子：自动完成：代码提示**
这里我们实现一个简单的自动完成功能，当用户输入 npm 时，按 tab 键，自动提示用户可选的子命令，如 help、init、install。

- 输入 np，按下 tab：自动补全为 npm
- 输入 npm in，按下 tab：自动提示可选子命令 init、install
- 输入 npm inst，按下 tab：自动补全为 npm install

```js
const readline = require("readline");
const fs = require("fs");

function completer(line) {
  const command = "npm";
  const subCommands = ["help", "init", "install"];

  // 输入为空，或者为npm的一部分，则tab补全为npm
  if (line.length < command.length) {
    return [command.indexOf(line) === 0 ? [command] : [], line];
  }

  // 输入 npm，tab提示 help init install
  // 输入 npm in，tab提示 init install
  let hits = subCommands.filter(function (subCommand) {
    const lineTrippedCommand = line.replace(command, "").trim();
    return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0;
  });

  if (hits.length === 1) {
    hits = hits.map(function (hit) {
      return [command, hit].join(" ");
    });
  }

  return [hits.length ? hits : subCommands, line];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer,
});

rl.prompt();
```

**例子：命令行工具：npmt init**
下面借助 readline 实现一个迷你版的 npm init 功能，运行脚本时，会依次要求用户输入 name、version、author 属性（其他略过）。

这里用到的是 rl.question(msg, cbk)这个方法，它会在控制台输入一行提示，当用户完成输入，敲击回车，cbk 就会被调用，并把用户输入作为参数传入。

```js
const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "OHAI> ",
});

const preHint = `
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`;

console.log(preHint);

// 问题
let questions = ["name", "version", "author"];

// 默认答案
let defaultAnswers = ["name", "1.0.0", "none"];

// 用户答案
let answers = [];
let index = 0;

function createPackageJson() {
  var map = {};
  questions.forEach(function (question, index) {
    map[question] = answers[index];
  });

  fs.writeFileSync("./package.json", JSON.stringify(map, null, 4));
}

function runQuestionLoop() {
  if (index === questions.length) {
    createPackageJson();
    rl.close();
    return;
  }

  let defaultAnswer = defaultAnswers[index];
  let question = questions[index] + ": (" + defaultAnswer + ") ";

  rl.question(question, function (answer) {
    answers.push(answer || defaultAnswer);
    index++;
    runQuestionLoop();
  });
}

runQuestionLoop();
```

### Node 的文件流（Stream）

Stream 是一个抽象接口，Node 中很多对象都实现了这个接口。
Ex：

- 对服务器发起请求的 request 对象是一个 Stream

NodeJS 这家拍卖行 Stream 有四种流类型：

1. Readable - 可读操作
2. Writeable - 可写操作
3. Duplex- 可读可写操作
4. Transform - 操作被写入的数据，然后读出结果

所有的 Stream 对象都是 EventEmitter 的实例。常用操作如下：

1. data - 当有数据可读时触发。
2. end - 没有更多的数据刻度时触发。
3. error - 在接收和写入的过程中发生错误时触发。
4. finish - 所有数据被写入到底层系统时触发。

访问 stream 模块：

```js
const stream = require("stream");
```

尽管理解流的工作方式很重要，但是 stream 模块主要用于开发者创建新类型的流实例。
对于以消费流对象为主的开发者，极少需要直接使用 stream 模块。
