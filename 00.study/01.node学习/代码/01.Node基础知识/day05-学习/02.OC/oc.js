const os = require("os");
// console.log(os);
// 获取CPU数据
// console.log(os.cpus());
// [
//   {
//     model: 'Intel(R) Core(TM) i7-10875H CPU @ 2.30GHz', // CPU 名
//     speed: 2304, //  以兆赫兹为单位。
//     times: {
//       user: 232062, // CPU 在用户模式下花费的毫秒数。
//       nice: 0, // CPU 在良好模式下花费的毫秒数。
//       sys: 1931765, // CPU 在系统模式下花费的毫秒数。
//       idle: 46474562, // CPU 在空闲模式下花费的毫秒数。
//       irq: 1065187 //  CPU 在中断请求模式下花费的毫秒数。
//     }
//   }
//   ......os
// ]

// 获取内存
console.log(os.totalmem()); // 16969207808
