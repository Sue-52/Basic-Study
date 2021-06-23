const fs = require("fs");

fs.rmdir("123", () => {
  console.log("删除成功");
});
