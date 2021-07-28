
// 引入 express 模块
const express = require("express");
const morgan = require('morgan')
// 创建服务
const app = express();
// app.use(morgan('tiny'));
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}));

app.get("/", (req, res) => {
  res.send("Hello World!!!")
  res.end();
})

// 监听端口
app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000")
})