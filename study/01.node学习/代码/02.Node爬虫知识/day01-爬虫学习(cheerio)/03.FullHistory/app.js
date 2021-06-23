const cheerio = require("cheerio");
const axios = require("axios");

// 1. 设置基准地址
const httpUrl =
  "https://wiki.biligame.com/arknights/%E5%B9%B2%E5%91%98%E5%9B%BE%E9%89%B4";
axios.get(httpUrl).then((res) => {
  // console.log(res.data);
  const $ = cheerio.load(res.data);
  $(
    "#content #bodyContent #mw-content-text .main-line-wrap .resp-tab-content > div"
  ).each((index, element) => {
    // 干员名称
    const title = $(element).find("a").attr("title");
    // 地址
    const totleUrl = "https://wiki.biligame.com";
    const pageUrl = totleUrl + $(element).find("a").attr("href");
    getPerson(pageUrl, title);
  });
});

// 进入对应页面
async function getPerson(geturl, title) {
  // console.log(url);
  // console.log(title);
  // 使用代理（中转站）服务
  // const options = {
  //   // Proxy: { host: "8.133.191.41", port: 8008 },
  //   responseType: "stream",
  // };
  // 发起请求
  // let res = await axios.get({
  //   url: geturl,
  //   method: "get",
  //   responseType: "stream",
  // });
  axios
    .get({
      url: geturl,
      method: "get",
      // responseType: "stream",
    })
    .then((res) => {
      console.log(res);
    });
  // console.log(res.data);
  // 带入
  let $ = cheerio.load(res.data);
  console.log($());
  // console.log($("#content").html());

  // $(
  //   "#content #mw-content-text .mw-parser-output .tjbgbox .resp-tabs .resp-tabs-container .resp-tab-content>.floatnone"
  // ).each((index, element) => {
  //   const imgUrl = $(element).find("img").attr("src");
  //   console.log(index, imgUrl);
  // });
}
