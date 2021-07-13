/*
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-07-13 14:50:15
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-13 17:27:21
 * @FilePath: \Basic-Study\00.study\03.Express学习\代码\day01-Express基础学习\code\app.js
 */
// 引入 express 模块
const express = require("express");
// 创建服务
const app = express();

// 创建接口
// app.get("/", (req, res) => {
//   res.send("Hello World")
// });

// app.post("/index", (req, res) => {
//   res.send("Got a Post request!!")
// });

// app.put("/user", (req, res) => {
//   res.send("Got a Put request!!")
// });

// app.delete("/manager", (req, res) => {
//   res.send("Got a Delete request!!")
// });

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log(req.params);  //  {}
  console.log(req.query);  //  { name: 'sue', age: '18' }
  console.log(req.method);
  console.log(req.path);
  console.log(req.headers);
  console.log(req.baseUrl);
})

// 监听端口
app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000")
})