<!--
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-06-29 20:51:50
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-12 11:23:28
 * @FilePath: \Basic-Study\Sakura-Template\src\App.vue
-->
<template>
  <div class="home_page">
    <NavBarVue />
    <div class="test"></div>
  </div>
</template>

<script lang="ts">
// 引入顶部导航组件
import NavBarVue from "./components/HomeComponents/NavBar/NavBar.vue";

export default {
  setup() {
    return {};
  },
  // 组件渲染
  components: {
    NavBarVue,
  },
};
</script>

<style lang="scss">
  #app {
    font-family: "Moe-Mashiro", "Merriweather Sans", Helvetica, Tahoma, Arial,
      "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", "WenQuanYi Micro Hei",
      sans-serif;
  }
  .name {
    color: $injectedColor;
  }
  .test {
    width: 100%;
    height: 2000px;
  }
</style>
