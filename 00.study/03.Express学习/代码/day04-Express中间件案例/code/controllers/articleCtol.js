//#region 1. 获取文章
exports.getListArticles = async (req, res) => {
  try {
    // 处理请求
    res.send(`GET /articles 获取文章`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 2. 获取关注作者后的更多文章
exports.getFeedArticles = async (req, res) => {
  try {
    // 处理请求
    res.send(`GET /articles/feed 获取关注作者后的更多文章`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 3. 无需身份验证，将返回单篇文章
exports.getArticles = async (req, res) => {
  try {
    // 处理请求
    res.send(`GET /articles/${req.params.slug} 无需身份验证，将返回单篇文章`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 4. 创建文章
exports.createArticles = async (req, res) => {
  try {
    // 处理请求
    res.send(`POST /articles 创建文章`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 5. 更新文章
exports.updateArticles = async (req, res) => {
  try {
    // 处理请求
    res.send(`PUT /articles/${req.params.slug} 更新文章`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 6. 删除文章
exports.deleteArticles = async (req, res) => {
  try {
    // 处理请求
    res.send(`DELETE /articles/${req.params.slug} 删除文章`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 7. 文章添加建议
exports.addCommentsToArticle = async (req, res) => {
  try {
    // 处理请求
    res.send(`POST /articles/${req.params.slug}/comments 文章添加建议`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 8. 获取文章的建议
exports.getComments = async (req, res) => {
  try {
    // 处理请求
    res.send(`GET /articles/${req.params.slug}/comments 获取文章的建议`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 9. 删除文章的建议
exports.deleteComments = async (req, res) => {
  try {
    // 处理请求
    res.send(`DELETE /articles/${req.params.slug}/comments 删除文章的建议`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 10. 删除文章的建议路需要登陆
exports.deleteCommentShouldLogin = async (req, res) => {
  try {
    // 处理请求
    res.send(`DELETE /articles/${req.params.slug}/comments/${req.params.id} 删除文章的建议路需要登陆`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 11. 最喜欢的文章
exports.favoriteArticle = async (req, res) => {
  try {
    // 处理请求
    res.send(`POST /articles/${req.params.slug}/comments/favorite 最喜欢的文章`)
  } catch (error) {
    next(error)
  }
}
//#endregion

//#region 12. 不喜欢的文章
exports.deleteFavoriteArticle = async (req, res) => {
  try {
    // 处理请求
    res.send(`DELETE /articles/${req.params.slug}/comments/favorite 不喜欢的文章`)
  } catch (error) {
    next(error)
  }
}
//#endregion

