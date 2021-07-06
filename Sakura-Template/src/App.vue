<!--
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-06-29 20:51:50
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-06 16:10:06
 * @FilePath: \Basic-Study\Sakura-Template\src\App.vue
-->
<template>
  <!-- <Fragment> -->
  <HelloWorld />
  <!-- <div>{{ name }}</div> -->
  <!-- 测试vuex--state数据传输 -->
  <!-- <div>{{ $store.state.count }}</div> -->
  <router-link to="/home">Home</router-link>
  <router-view></router-view>
  <!-- </Fragment> -->
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  setup() {
    // 测试compositionAPI
    // const name = ref("张三");
    return {
      // name,
    };
  },
  // 组件渲染
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
