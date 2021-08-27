<template>
  <div>
    <NavBarVue />
    <MainPicVue />
    <a
      href="#"
      class="top_down"
      :style="{ top: topDown + 'px' }"
      ref="down"
      @click="handleJumpTop"
    ></a>
    <div class="heightT"></div>
  </div>
</template>

<script lang="ts">
import NavBarVue from "../../components/HomeComponents/NavBar/NavBar.vue";
import MainPicVue from "../../components/HomeComponents/MainPic/MainPic.vue";
import { onMounted, ref } from "@vue/runtime-core";
export default {
  // Home页面标注
  name: "Home",
  //
  setup() {
    let topDown = ref(0);
    onMounted(() => {
      window.addEventListener("scroll", handleScroll, true);
    });
    let handleScroll = () => {
      // 变量scrollTop 为当前页面的滚动条纵坐标位置
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 13) {
        topDown.value = -13;
      } else {
        topDown.value = -900;
      }
    };
    let handleJumpTop = (event: any) => {
      event.preventDefault();
      const top = document.documentElement || document.body;
      console.log(top);
      top.animate({ scrollTop: 0 }, 800);
    };

    return {
      topDown,
      handleJumpTop,
    };
  },
  // 组件
  components: {
    NavBarVue,
    MainPicVue,
  },
};
</script>

<style lang="scss" scoped>
  .top_down {
    position: fixed;
    right: 25px;
    top: -900px;
    z-index: 99;
    width: 70px;
    height: 900px;
    background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png)
      no-repeat center;
    background-size: contain;
    transition: all 0.5s ease-in-out;
    opacity: 1;
  }
  .heightT {
    width: 100%;
    height: 2000px;
  }
</style>