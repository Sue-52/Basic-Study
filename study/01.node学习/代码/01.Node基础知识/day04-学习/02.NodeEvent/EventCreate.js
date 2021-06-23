const fs = require("fs");

fs.readFile(
  "Hello.txt",
  { flag: "r", encoding: "utf-8" },
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      sEvent.emit("fileSuccess", data);
    }
  }
);

// Event
let sEvent = {
  event: {
    // fileSuccess: [],
  },
  on: function (eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn);
    } else {
      this.event[eventName] = [];
      this.event[eventName].push(eventFn);
    }
  },
  emit: function (eventName, eventMsg) {
    if (this.event[eventName]) {
      this.event[eventName].forEach((item) => {
        item(eventMsg);
      });
    }
  },
};

// 1. 获取所有信息
sEvent.on("fileSuccess", function (eventMsg) {
  console.log("1. 成功获取所有信息");
});
// 2. 统计
sEvent.on("fileSuccess", function (eventMsg) {
  console.log("2. 成功统计");
});

// 3.详细信息
sEvent.on("fileSuccess", function (eventMsg) {
  console.log("3. 成功获取详细信息");
});
