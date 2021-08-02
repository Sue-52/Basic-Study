const express = require("./express")
const app = express();

app.get("/ab?cd", (req, res) => {
  res.end("get /ab?cd")
})

app.get("/users/:userId/books/:bookId", (req, res) => {
  console.log(req.params)
  res.end("get /users/:userId/books/:bookId")
})

app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000")
})