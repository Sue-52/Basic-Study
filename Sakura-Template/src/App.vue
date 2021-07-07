<!--
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-06-29 20:51:50
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-06 18:08:17
 * @FilePath: \Basic-Study\Sakura-Template\src\App.vue
-->
<template>
  <HelloWorld />
  <div class="name">{{ name }}</div>
  <!-- 测试vuex--state数据传输 -->
  <!-- <div>{{ $store.state.count }}</div> -->
  <router-link to="/home">Home</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  setup() {
    // 测试compositionAPI
    const name = ref<string>("张三");
    return {
      name,
    };
  },
  // 组件渲染
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .name {
    color: $injectedColor;
  }
</style>
