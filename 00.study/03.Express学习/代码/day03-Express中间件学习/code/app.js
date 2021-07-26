const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET /")
})

app.get("/about", (req, res) => {
  res.send("GET /about")
})

app.post("/login", (req, res) => {
  res.send("POST /login")
})

app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000")
})