/*
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-06-29 20:51:50
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-09 20:40:15
 * @FilePath: \Basic-Study\Sakura-Template\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
// 模块化配置
import * as path from 'path';

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
