const express = require("express");
const { login, register, getCurrentUser, updateCurrentUser } = require("../controllers/userCtol")
const router = express.Router();

// 1. 用户登录路由
router.post("/users/login", login)

// 2. 用户注册路由
router.post("/users", register)

// 3. 获取当前登录用户路由
router.get("/user", getCurrentUser)

// 4. 更新当前登录用户路由
router.put("/user", updateCurrentUser)

module.exports = router;