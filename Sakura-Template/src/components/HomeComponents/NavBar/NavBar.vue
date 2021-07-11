<!--
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-07-09 20:35:09
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-09 21:15:40
 * @FilePath: \Basic-Study\Sakura-Template\src\components\HomeComponents\NavBar\NavBar.vue
-->
<template>
  <div class="navbar">
    <header id="header" class="top_navbar">
      <div class="top_navbar-left" data-title="DR.Sueの迦勒底亚斯">
        <span class="top_name">DR.Sue</span>
        <span class="de">の</span>
        <span class="top_fgo">カルデア</span>
        <span class="bottom_small_name">DR.Sue の 迦 勒 底 亚 斯</span>
      </div>
      <div class="top_navbar-right"></div>
    </header>
  </div>
</template>

<script lang="ts">
export default {
  name: "navbar",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  /* 引入样式 */
  @import "./index.scss";
</style>