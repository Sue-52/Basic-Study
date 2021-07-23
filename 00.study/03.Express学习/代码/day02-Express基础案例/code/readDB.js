const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "db", "db.json")
// 使用util中的promisify封装
// const { promisify } = require("util");
// const readFile = promisify(fs.readFile);

// 封装方法一：
exports.getDB = () => {
  return new Promise(function (resolve, reject) {
    fs.readFile(dbPath, { flag: "r", encoding: "utf-8" }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    })
  })
}

// 封装方法二：
// exports.getDB = async () => {
//   const data = await fs.readFile(dbPath, "utf-8");
//   return JSON.parse(data);

// }