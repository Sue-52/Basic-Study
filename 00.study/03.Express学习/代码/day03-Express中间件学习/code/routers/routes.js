const express = require("express");

// 1. 创建路由实例
// 路由实例其实相当于一个mini Express 实例
const router = express.Router();

// 2. 配置路由
router.get("/", (req, res, next) => {
  try {
    res.send("GET /")
  } catch (error) {
    next(error) // 跳过所有剩余的非错误处理路由和中间件函数
  }
})
router.get("/todos", (req, res, next) => {
  try {
    res.send("GET /")
  } catch (error) {
    next(error) // 跳过所有剩余的非错误处理路由和中间件函数
  }
})

// 3. 导出路由；
module.exports = router;