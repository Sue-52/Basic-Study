const express = require("express");
const router = require("./routers/routes");
// 实例化express
const app = express();

app.use(express.json())
app.use(router);


app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000")
})