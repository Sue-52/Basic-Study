/*
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-06-22 22:34:55
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-06-22 23:01:22
 * @FilePath: \01.Graduation\study\01.node学习\代码\02.Node爬虫知识\day02-爬虫学习(puppeteer)\01.example\example.js
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();