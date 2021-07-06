/*
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-07-06 11:31:23
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-06 16:08:20
 * @FilePath: \Basic-Study\Sakura-Template\src\store\store.ts
 */
import state from "./state"; // 状态
import getters from "./getters"; // 计算属性
import mutations from "./mutations"; // 同步方法
import actions from "./actions"; // 异步方法
// import { Store } from "vuex";
import { createStore } from "vuex";

// const store = new Store({
//   state,
//   getters,
//   mutations,
//   actions
// })
const store = createStore({
  state,
  getters,
  mutations,
  actions
})

export default store