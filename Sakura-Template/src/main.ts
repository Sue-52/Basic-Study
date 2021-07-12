/*
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-06-29 20:51:50
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-12 11:47:16
 * @FilePath: \Basic-Study\Sakura-Template\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
// 清楚默认样式
import "./utils/resetCSS/reset.css"
// 引入路由
import router from "./routes/routes";
// 挂载vuex
import store from "./store/store"

const app = createApp(App);
// 挂载vuex
app.use(store);
// 挂载路由
app.use(router);

// 实例化#app
app.mount('#app')
