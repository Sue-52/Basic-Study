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
        <div class="header-info"></div>
      </div>
    </figure>
  </div>
</template>

<script lang="ts">
export default {
  name: "MainPic",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  /* 中间图片背景样式 start */
  .header_top {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  #centerBar {
    width: 100%;
    height: 830px;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: 1;
  }

  @media (max-width: 860px) {
    #centerBar {
      height: 300px;
      background-attachment: scroll;
    }
  }
  .centerBar {
    background-image: url(./img/AK-01.jpg);
    background-position: center center;
  }
  /* 中间图片背景样式 end */

  /* 中间字体样式和动画 start */
  .focusinfo {
    position: relative;
    max-width: 800px;
    padding: 0 10px;
    top: 49.3%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 99;
  }

  h1 {
    position: relative;
    color: #fff;
    mix-blend-mode: lighten;
  }
  .center-text {
    margin: auto;
    font-family: "Ubuntu", sans-serif;
    font-size: 68px;
    text-transform: uppercase;
  }

  h1,
  h1::after {
    font-size: 68px;
    font-family: "Ubuntu", sans-serif;
    background: linear-gradient(transparent 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    line-height: 76px;
    /* box-shadow: 6px 0px 0px #00e6f6; */
    outline: transparent;
    position: relative;
  }

  h1::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: "Hello The World !";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  h1:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
  /* 中间字体样式和动画 end */
</style>
