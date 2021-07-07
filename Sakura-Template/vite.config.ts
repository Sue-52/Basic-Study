import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
// 模块化配置
// const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 配置公共的scss样式
        additionalData: `@import "./src/assets/scss/global.scss";`
      }
    }
  }
})
