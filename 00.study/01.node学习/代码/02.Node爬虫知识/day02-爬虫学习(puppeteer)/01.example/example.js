/*
                      /^--^\     /^--^\     /^--^\
                      \____/     \____/     \____/
                     /      \   /      \   /      \
                    |        | |        | |        |
                     \__  __/   \__  __/   \__  __/
|^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
| | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
########################/ /######\ \###########/ /#######################
| | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-06-22 22:34:55
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-05 21:48:36
 * @FilePath: \Basic-Study\00.study\01.node学习\代码\02.Node爬虫知识\day02-爬虫学习(puppeteer)\01.example\example.js
 */
const puppeteer = require('puppeteer');

(async () => {
  const options = {
    // headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    defaultViewport: {
      width: 1280,
      height: 930
    },
    timeout: 50000,
  }
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage();
  await page.goto('https://wiki.biligame.com/arknights/%E9%A6%96%E9%A1%B5');

  let res = await page.$$eval("#mw-content-text .mw-parser-output .BOX-N div a .BOX-zt", (elements) => {
    // console.log(elements)
    let message = [];
    elements.forEach(function (item, index) {
      let mesObj = {
        content: `${index + 1}-${item.innerHTML}`
      }
      message.push(mesObj);
    })
    return message;
  })
  console.log(res)
  // 监听页面-console
  // page.on("console", function (eleMsg) {
  //   // console.log(args)
  //   console.log(eleMsg.text())
  // })

  // await browser.close();
})();