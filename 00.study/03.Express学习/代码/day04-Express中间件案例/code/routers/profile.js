const express = require("express");
const { getUserProfile, followUser, unfollowUser } = require("../controllers/profileCtol")
const router = express.Router();

// 1. 获取用户资料路由
router.get("/:username", getUserProfile)

// 2. 关注用户路由
router.post("/:username/follow", followUser)

// 3. 取消关注路由
router.delete("/:username/unfollow", unfollowUser)

module.exports = router;