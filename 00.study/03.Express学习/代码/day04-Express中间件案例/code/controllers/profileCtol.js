//#region 1. 获取用户资料
exports.getUserProfile = async (req, res) => {
  try {
    // 处理请求
    res.send(`GET /profiles/${req.params.username} 获取用户资料`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 2. 关注用户
exports.followUser = async (req, res) => {
  try {
    // 处理请求
    res.send(`POST /profiles/${req.params.username}/follow 关注用户`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 3. 取消关注
exports.unfollowUser = async (req, res) => {
  try {
    // 处理请求
    res.send(`DELETE /profiles/${req.params.username}/unfollow 取消关注`)
  } catch (error) {
    next(error)
  }
}
//#endregion


