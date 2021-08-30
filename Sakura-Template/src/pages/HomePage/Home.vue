<template>
  <div>
    <NavBarVue :data="navBgc" :showMiddle="middleShow" />
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
    let navBgc = ref("transparent"); // 背景颜色
    let middleShow = ref("none"); // 显示中间list
    onMounted(() => {
      window.addEventListener("scroll", handleScroll, true);
    });
    // 设置下拉属性，当页面加载后显示
    let handleScroll = () => {
      // 变量scrollTop 为当前页面的滚动条纵坐标位置
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop);
      if (scrollTop >= 13) {
        topDown.value = -13;
        navBgc.value = "#ffffff";
        middleShow.value = "inline-block";
      } else {
        topDown.value = -900;
        navBgc.value = "transparent";
        middleShow.value = "none";
      }
    };

    // 点击回到顶端（有过渡动画）
    let handleJumpTop = (event: any) => {
      event.preventDefault();
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            20;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    };

    return {
      topDown,
      handleJumpTop,
      navBgc,
      middleShow,
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