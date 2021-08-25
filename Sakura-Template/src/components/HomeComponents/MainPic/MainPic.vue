<template>
  <div class="header_top">
    <!-- 波浪1 -->
    <div class="wave-first"></div>
    <!-- 波浪2 -->
    <div class="wave-second"></div>
    <!-- 中间整体的图片 -->
    <figure id="centerBar" class="centerBar">
      <div class="focusinfo">
        <!-- 中间文字 -->
        <h1 class="center-text">Hello The World!</h1>
        <!-- 首页信息 -->
        <div class="header-info">
          <!-- 每日一句 -->
          <p>
            <i class="iconfont icon-quoteleft"></i>
            You got to put the past behind you before you can move on.
            <i class="iconfont icon-quoteright"></i>
          </p>
          <!-- 社交图标 -->
          <div class="social_communication">
            <li v-for="item in social_icon" :key="item.id">
              <a
                href="#"
                :class="item.iconfont"
                :style="{ color: item.color }"
              ></a>
            </li>
          </div>
        </div>
      </div>
    </figure>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "MainPic",
  setup() {
    let social_icon = ref([
      { id: "1", iconfont: "iconfont icon-zuo", color: "#1296db" },
      { id: "2", iconfont: "iconfont icon-github", color: "#000000" },
      { id: "3", iconfont: "iconfont icon-Telegram", color: "#0088cc" },
      {
        id: "4",
        iconfont: "iconfont icon-wangyiyunyinle1-copy",
        color: "#e94e37",
      },
      { id: "5", iconfont: "iconfont icon-Twitter", color: "#1ab2e8" },
      { id: "6", iconfont: "iconfont icon-QQ", color: "#fff" },
      { id: "7", iconfont: "iconfont icon-zhihu", color: "#e7e5e3" },
      { id: "8", iconfont: "iconfont icon-youjian", color: "#ffbf00" },
      { id: "9", iconfont: "iconfont icon-you", color: "#1296db" },
    ]);
    return {
      social_icon,
    };
  },
};
</script>

<style lang="scss" scoped>
  /* 引入样式 */
  @import "./index.scss";
</style>
