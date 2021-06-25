const express = require("express");
let app = express();

app.get("/", function (req, res) {
  // res.send("hello world"); //发送一个请求
  res.send("wdnmd");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000");
});
