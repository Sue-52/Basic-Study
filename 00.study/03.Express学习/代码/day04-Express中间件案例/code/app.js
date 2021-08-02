const express = require("express");
// 导入日志请求包 Morgan
const morgan = require("morgan");
// 导入跨域请求包 cors
const cors = require("cors");
// 导入路由文件
const router = require("./routers");
// 导入错误同意处理配置项文件
const errorHandler = require("./middlewares/error-handler")
// 引入数据库设置
require("./models")

const app = express();

// 配置请求日志morgan
app.use(morgan("dev"))

// 配置跨域请求包 cors
app.use(cors())

// 配置请求体
app.use(express.json())
app.use(express.urlencoded())

// 端口号
const PORT = process.env.PORT || 3000;

// 挂在路由
app.use("/api", router)

// 挂在统一处理的服务端错误中间件
app.use(errorHandler())


app.listen(PORT, () => {
  console.log(`Server running at Http://localhost:${PORT}`)
})