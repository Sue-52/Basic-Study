## Mysql 学习

### Node 连接 Mysql

**在 db 文件夹下创建 config.js**

```js
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "study_mysql",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});
```

**app.js 中引用**

```js
const express = require("express");
const app = express();
require("./db/config");

app.listen(3000, () => {
  console.log("Server start at: http://localhost:3000");
});
```

### 数据库操作（CRUD）
