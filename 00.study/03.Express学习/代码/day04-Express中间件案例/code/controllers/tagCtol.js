//#region 获取标签功能
exports.getTags = async (req, res) => {
  try {
    // 处理请求
    res.send("GET /tags 获取标签")
  } catch (error) {
    next(error)
  }
}
//#endregion