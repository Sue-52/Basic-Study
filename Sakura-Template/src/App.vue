<!--
 * @Author: Edmond℡优格·索托斯T_T～♥
 * @Date: 2021-06-29 20:51:50
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-07-02 09:39:19
 * @FilePath: \Basic-Study\Sakura-Template\src\App.vue
-->
<template>
  <HelloWorld />
  <div>{{ name }}</div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  setup() {
    const name = ref("张三");
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

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
