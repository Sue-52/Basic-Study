const express = require("express");
// 导入fs模块
const fs = require("fs");
// 导入封装好的模块
const { getDB } = require("./readDB");

const app = express();

// 查询任务列表：
app.get("/todos", async (req, res) => {
  // 通过读取json文件来获取数据
  try {
    const data = await getDB();
    console.log(data);
    res.status(200).json(data.todos)
  } catch (err) {
    res.status(404).json({
      msg: err.message
    })
  }

  // res.send("GET /todos")
})

// 根据 ID 查询单个任务
app.get("/todos/:id", (req, res) => {
  // 获取:id所拿到的任意值
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json({
        msg: err.message
      })
    }
    const db = JSON.parse(data);
    const item = db.todos.find(item => item.id === Number.parseInt(req.params.id));
    console.log(item)
    if (!item) {
      return res.status(404).json({
        msg: err.message
      })
    }
    res.status(200).send(item);
  })
  // res.send(`GET /todos/${req.params.id}`)
})

// 添加任务
app.post("/todos", (req, res) => {
  res.send("POST /todos")
})

// 修改任务
app.patch("/todos/:id", (req, res) => {
  res.send(`PATCH /todo/${req.params.id}`)
})

// 删除任务
app.delete("/todos/:id", (req, res) => {
  res.send(`DELETE /todos/${req.params.id}`)
})

app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000")
})