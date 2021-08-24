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
