import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
// import sass from "sass"
// import sassLoader from "sass-loader"
// 模块化配置
// const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ]
})
