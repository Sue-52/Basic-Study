const fs = require("fs");

fs.unlink("hhh.js", () => {
  console.log("删除成功");
});
