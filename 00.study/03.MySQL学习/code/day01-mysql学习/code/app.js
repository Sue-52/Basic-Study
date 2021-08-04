const express = require("express")
const app = express();
require("./db/config")

app.listen(3000, () => {
  console.log("Server start at: http://localhost:3000")
})