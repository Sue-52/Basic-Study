const express = require("express");
// 导入fs模块
const fs = require("fs");
// 导入封装好的模块
const { getDB, saveDB } = require("./readDB");

const app = express();

// 配置解析表单请求体 application/json
app.use(express.json());
// 配置解析表单请求体 application/x-www-form-urlencoded
app.use(express.urlencoded())
// 最终都会解析为JS对象供我们使用

// 查询任务列表：
app.get("/todos", async (req, res) => {
  // 通过读取json文件来获取数据
  try {
    const data = await getDB();
    // console.log(data);
    res.status(200).json(data.todos)
  } catch (err) {
    res.status(404).json({
      msg: err.message
    })
  }
})

// 根据 ID 查询单个任务
app.get("/todos/:id", async (req, res) => {
  // 获取:id所拿到的任意值
  const data = await getDB();
  try {
    const item = data.todos.find(item => item.id === Number.parseInt(req.params.id));
    // console.log(item)
    if (!item) {
      res.status(404).json({
        msg: err.message
      })
    }
    res.status(200).send(item);
  } catch (err) {
    res.status(404).json({
      msg: err.message
    })

  }
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json({
        msg: err.message
      })

    }

  })
  // res.send(`GET /todos/${req.params.id}`)
})

// 添加任务
app.post("/todos", async (req, res) => {
  try {
    // 1. 获取客户端的请求体参数
    // console.log(req.body);
    const data = req.body;
    // 2. 数据验证
    if (!data.title) {
      return res.status(422).json({
        error: "The field title is required"
      })
    }
    // 3. 数据验证通过后把数据存储到 db 中
    const db = await getDB();
    // 将数据 放入db中（当前保存在内存中）
    db.todos.push({
      id: db.todos.length + 1,
      title: data.title
    })

    await saveDB(db);
    res.status(201).json({
      code: 201,
      msg: data
    })
  } catch (error) {
    res.status(500).json({
      error: err.message
    })
  }
  // res.send("POST /todos")
})

// 修改任务
app.patch("/todos/:id", async (req, res) => {
  try {
    // 1. 获取表单数据
    const data = req.body;
    // 获取db中所有数据
    const db = await getDB();
    // 2. 查找要修改的任务项
    const item = db.todos.find(item => item.id === Number.parseInt(req.params.id));
    // 找不到数据直接结束
    if (!item) {
      return res.status(404).end();
    }
    // 3. 成功后替换并重新保存
    // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
    // Object.assign(target, ...sources)    【target：目标对象】，【souce：源对象（可多个）】
    Object.assign(item, data);

    await saveDB(db);

    res.status(200).json({
      code: 200,
      msg: data,
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }

  // res.send(`PATCH /todo/${req.params.id}`)
})

// 删除任务
app.delete("/todos/:id", async (req, res) => {
  try {
    // 获取要删除的id
    const dataId = Number.parseInt(req.params.id);
    // 获取整体数据
    const db = await getDB();
    // 通过findIndex找到索引
    const index = db.todos.findIndex(item => item.id === dataId);
    // 删除对应索引
    db.todos.splice(index, 1);
    if (index === -1) {
      res.status(404).json({
        msg: "未找到该数据"
      })
    }
    await saveDB(db);
    res.status(204).json({
      code: 204,
      msg: db
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
  // res.send(`DELETE /todos/${req.params.id}`)
})

// 监听数据端口
app.listen(3000, () => {
  console.log("Server running at Http://localhost:3000")
})