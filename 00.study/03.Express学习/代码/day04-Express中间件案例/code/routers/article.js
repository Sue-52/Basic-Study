const express = require("express");
const {
  getListArticles,
  getFeedArticles,
  getArticles,
  createArticles,
  updateArticles,
  deleteArticles,
  addCommentsToArticle,
  getComments,
  deleteComments,
  deleteCommentShouldLogin,
  favoriteArticle,
  deleteFavoriteArticle
} = require("../controllers/articleCtol")
const router = express.Router();

// 1. 获取文章路由
router.get("/", getListArticles)

// 2. 获取关注作者后的更多文章路由
router.get("/feed", getFeedArticles)

// 3. 无需身份验证，将返回单篇文章路由
router.get("/:slug", getArticles)

// 4. 创建文章路由
router.post("/", createArticles)

// 5. 更新文章路由
router.put("/:slug", updateArticles)

// 6. 删除文章路由
router.delete("/:slug", deleteArticles)

// 7. 文章添加建议路由
router.post("/:slug/comments", addCommentsToArticle)

// 8. 获取文章的建议路由
router.get("/:slug/comments", getComments)

// 9. 删除文章的建议路由
router.delete("/:slug/comments", deleteComments)

// 10. 删除文章的建议路需要登陆由
router.delete("/:slug/comments/:id", deleteCommentShouldLogin)

// 11. 最喜欢的文章陆由
router.post("/:slug/comments/favorite", favoriteArticle)

// 12. 不喜欢的文章陆由
router.delete("/:slug/comments/favorite", deleteFavoriteArticle)

module.exports = router;