//#region 1. 用户登录功能
exports.login = async (req, res) => {
  try {
    // 处理请求
    res.send("POST /users/login 用户登录")
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 2. 用户注册功能
exports.register = async (req, res) => {
  try {
    // 处理请求
    res.send("POST /users 用户注册")
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 3. 获取当前登录用户
exports.getCurrentUser = async (req, res) => {
  try {
    // 处理请求
    res.send("GET /user 获取当前用户")
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 4. 获取当前登录用户
exports.updateCurrentUser = async (req, res) => {
  try {
    // 处理请求
    res.send("PUT /user 更新当前用户")
  } catch (error) {
    next(error)
  }
}
//#endregion