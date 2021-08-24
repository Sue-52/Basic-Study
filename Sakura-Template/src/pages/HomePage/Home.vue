<template>
  <div>
    <NavBarVue />
    <MainPicVue />
  </div>
</template>

<script lang="ts">
import NavBarVue from "../../components/HomeComponents/NavBar/NavBar.vue";
import MainPicVue from "../../components/HomeComponents/MainPic/MainPic.vue";
export default {
  // Home页面标注
  name: "Home",
  //
  setup() {},
  // 组件
  components: {
    NavBarVue,
    MainPicVue,
  },
};
</script>

<style lang="sass" scoped>
</style>