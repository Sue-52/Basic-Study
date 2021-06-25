const axios = require("axios");
// console.log(axios);
// `headers` 是即将被发送的自定义请求头

// 请求地址
let httpUrl = "https://www.bilibili.com";
// axios的get方法
axios
  .get(httpUrl, {
    // `headers` 是即将被发送的自定义请求头
    headers: {
      // 默认为我们所在文件为浏览器
      "upgrade-insecure-requests": 1,
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36",
    },
  })
  .then((res) => {
    console.log(res);
  });
