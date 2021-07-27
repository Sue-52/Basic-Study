const express = require("express");
const app = express();

// req 请求对象
// res 请求响应
// next 下一个中间件
// 关心请求路径
// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next()
// })

// 限定请求路径
// 多个处理函数
// app.use("/user/:id", (req, res, next) => {
//   console.log("Request Type:", req.method);
//   next()
// }, (req, res, next) => {
//   console.log("Request URL:" + req.originalUrl)
//   next();
// })

app.get("/", (req, res) => {
  res.send("GET /")
})
// 限定请求方法 + 请求路径
// 为同一个路径定义多个处理中间件
// app.get("/user/:id", (req, res, next) => {
//   res.send("User");
//   next();
// }, (req, res, next) => {
//   console.log("ID:" + req.params.id);
// })

// 此示例显示了一个中间件子堆栈，该子堆栈处理对 `/user/:id` 路径的 GET 请求
// app.get("/user/:id", (req, res, next) => {
//   // 条件成立后不执行后续的中间件，直接跳到下一个跟其一样的方法上
//   if (req.params.id === "0") next("route");
//   else next();
// }, (req, res, next) => {
//   res.send("regular");
// })

function logOriginalUrl(req, res, next) {
  console.log("Request URL:" + req.originalUrl)
  next();
}
function logMethod(req, res, next) {
  console.log("Request Type:", req.method)
  next();
}
var logStuff = [logOriginalUrl, logMethod]
app.get("/user/:id", logStuff, (req, res, next) => {
  res.send("User Info")
})

app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000")
})