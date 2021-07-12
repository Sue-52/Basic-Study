/*
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-07-09 20:28:43
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-12 15:15:16
 * @FilePath: \Basic-Study\00.study\01.node学习\代码\03.promise和async总结\async_promise.js
 */

const setDelay = (time) => {
  return new Promise((resolve, reject) => {
    if (typeof time != "number") reject(new Error("参数必须是Number类型"))
    setTimeout(() => {
      resolve(`我延迟了${time}毫秒后输出的`)
    }, time)
  })
}
const setDelaySecond = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds != 'number' || seconds > 10) reject(new Error('参数必须是number类型，并且小于等于10'));
    setTimeout(() => {
      // console.log(`先是setDelaySeconds函数输出，延迟了${seconds}秒，一共需要延迟${seconds + 2}秒`)
      resolve(`我延迟了${seconds}秒后输出的，是第二个函数`)
      // resolve(setDelay(2000))
    }, seconds * 1000)
  })
}

setDelay(2000).then((res) => {
  console.log(res);
  console.log("------First------")
  return setDelaySecond(20);
}).catch(err => {
  console.log(err);
}).then(res => {
  console.log(res);
  console.log("-------Second-------")
}, (_err) => {
  console.log("出错了，不是经过catch进行捕获的")
}).then(res => {
  console.log("继续执行中")
})

// setDelay(2000).then((success) => {
//   console.log(success)
// }).catch((error) => {
//   console.log(error)
// })

// setDelaySecond(3).then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err);
// })