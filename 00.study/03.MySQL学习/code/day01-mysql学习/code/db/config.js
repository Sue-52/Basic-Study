var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'study_mysql'
});

connection.connect((err) => {
  if (err) {
    console.log(err)
  }
  console.log("数据库连接成功")
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end()