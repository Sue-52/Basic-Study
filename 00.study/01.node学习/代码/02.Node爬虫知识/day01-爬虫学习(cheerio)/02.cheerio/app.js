const cheerio = require("cheerio");
const axios = require("axios");
// 4. 引入fs模块
const fs = require("fs");
const path = require("path");

// 1. 设置基准地址
let httpURL = "https://www.manongbook.com/other/";
// 2. 发起请求
axios.get(httpURL).then((res) => {
  // console.log(res.data);
  // 2.1 将获取到的整个页面放入cheerio.load中加载
  const $ = cheerio.load(res.data);
  // 2.2 根据DOM标签进入自己想要的部分并遍历
  $(".outer .article .main li").each((index, element) => {
    // console.log(element);
    // 2.3 获取title白哦提
    let title = $(element).find("h2 a").text();
    // console.log(title);
    // 2.4 获取页面的地址
    let pageUrl = $(element).find("a").attr("href");
    //  4.1 写入文件夹
    fs.mkdir(`./img/${title}`, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("写入成功");
    });
    // console.log(pageUrl);
    // 3.5 调用函数并将值传入
    parsePage(pageUrl, title);
  });
});

// 3. 进入所需的子网页
async function parsePage(url, title) {
  let res = await axios.get(url);
  // 3.1 将获取到的整个页面放入cheerio.load中加载
  let $ = cheerio.load(res.data);
  // 3.2 根据DOM标签进入自己想要的部分并遍历
  $(".outer .main .newsview .news_con a").each((index, element) => {
    // 3.3 获取href
    let imgUrl = $(element).attr("href");
    // console.log("https://www.manongbook.com" + imgUrl);
    // 3.4 扩展名
    let extreName = path.extname(imgUrl);
    // 4.2 创建写入流
    const imgName = `img/${title}/${title}-${index}${extreName}`;
    let ws = fs.createWriteStream(imgName);
    // 4.3 请求图片，并设置流
    axios
      .get("https://www.manongbook.com" + imgUrl, { responseType: "stream" })
      .then((res) => {
        // 当在可读流上调用 stream.pipe() 方法时会发出 'pipe' 事件，并将此可写流添加到其目标集
        res.data.pipe(ws);
        console.log("图片加载完成：" + imgName);
        // 写入完成后停止流的运行
        res.data.on("close", () => {
          ws.close();
        });
      });
    // ws.close();
  });
}
