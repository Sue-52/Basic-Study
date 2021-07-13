/*
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-07-12 16:17:59
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-12 16:35:12
 * @FilePath: \Basic-Study\00.study\03.MySQL学习\code\day01-mysql学习\code\config.js
 */
const mysql = require("mysql");

// 创建连接池
const pool = mysql.createConnection({
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'china'
})

// 测试链接
pool.connect((err) => {
  try {
    console.log("数据库连接成功!")
  } catch (error) {
    throw err;
  }
})

