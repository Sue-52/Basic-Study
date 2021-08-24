
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import Home from "../pages/HomePage/Home.vue";

// 2. 定义路由配置
const routes: Array<RouteRecordRaw> = [
  {
    // 主页路由
    path: '/',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    // 压缩后的可见名称
    component: () => /* webpackChunkName: "home" */ Home
  }
]

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用 hash 模式
  history: createWebHashHistory(),
  // 5. 挂在路由配置
  routes, // short for `routes: routes`
})

// 6. 导出实例化路由
export default router