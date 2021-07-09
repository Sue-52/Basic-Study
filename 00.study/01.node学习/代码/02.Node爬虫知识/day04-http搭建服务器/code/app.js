/*
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-07-09 20:04:12
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-09 20:21:37
 * @FilePath: \Basic-Study\00.study\01.node学习\代码\02.Node爬虫知识\day04-http搭建服务器\code\app.js
 */
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  if (req.url == "/") {
    res.end("首页")
  } else if (req.url == "/home") {
    res.end("主页")
  } else if (req.url == "/index") {
    res.end("目录")
  }
})

server.listen(3000, () => {
  console.log("服务器启动成功：http://localhost:3000")
})