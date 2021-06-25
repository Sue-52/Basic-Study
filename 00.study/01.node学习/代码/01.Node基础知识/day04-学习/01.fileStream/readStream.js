// 1. 引入fs模块
const { on } = require("events");
const fs = require("fs");

// 创建读取流createReadStream（文件路径，{options配置}）
let rs = fs.createReadStream("./Aimer - カタオモイ.flac", {
  flags: "r",
});
var ws = fs.createWriteStream("./单相思-Aimer.flac", {
  flags: "w",
});

// 1. 打开文件
rs.on("open", () => {
  console.log("1. 文件打开");
});

// 查看文件流出情况
// 单次流出数据量：65536
// <Buffer e4 96 84 23 08 26 b6 22 18 4b c0 e6 98 c3 cb 45 20 10 92 c3 88 86 63 83 62 c6 61 6f 33 b2 04 71 9b 3c c1 a0 21 94 45 c1 44 0b d0 22 1c 34 99 e1 04 8a ... 65486 more bytes>
// 单次流出数据量：10405
// <Buffer fe 99 92 7c f2 49 27 33 26 66 49 2c 92 64 9c cc 92 7c 9f fe 99 92 4f ff 33 0c f3 e6 67 fe 64 f3 f4 e4 99 24 a6 5e 49 d2 49 33 9c 92 7c 92 49 25 32 9c ... 10355 more bytes>
rs.on("data", (chunk) => {
  console.log(`单次流出数据量：${chunk.length}`);
  console.log(chunk);
  ws.write(chunk, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("文件写入成功");
  });
});

//2. 文件关闭
rs.on("close", () => {
  ws.end();
  console.log("2. 文件关闭");
});
