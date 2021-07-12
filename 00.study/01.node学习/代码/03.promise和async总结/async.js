/*
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-07-12 15:40:19
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-12 15:45:50
 * @FilePath: \Basic-Study\00.study\01.node学习\代码\03.promise和async总结\async.js
 */
const demo = async function () {
  return Promise.resolve("我是Promise");
  // 等同于 return '我是Promise'
  // 等同于 return new Promise((resolve,reject)=>{ resolve('我是Promise') })
};
demo().then((result) => {
  console.log(result); // 这里拿到返回值
});