const express = require("express");
const { getTags } = require("../controllers/tagCtol")
const router = express.Router();

// 1. 获取标签路由
router.get("/", getTags)


module.exports = router;