const express = require("express");
const router = require("./routers/routes");

// 实例化express
const app = express();

app.use(express.json())
app.use(router);

// 通常在所有的路由之后配置处理 404 内容
app.use((req, res, next) => {
  res.status(404).send("404 Not Found")
})

// 在所有的挂在完成后的最后书写错误处理中间件
app.use((err, req, res, next) => {
  console.log("error:" + err.message);
  res.status(500).json({
    code: 500,
    message: err.message
  })
})

app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000")
})