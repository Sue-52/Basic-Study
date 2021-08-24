<template>
  <div class="navbar">
    <header id="header" class="top_navbar">
      <!-- 博客名 start -->
      <router-link
        to="/"
        class="top_navbar-left change_mouse"
        data-title="DR.Sueの迦勒底亚斯"
      >
        <span class="top_name">DR.Sue</span>
        <span class="de">の</span>
        <span class="top_fgo">カルデア</span>
        <span class="bottom_small_name">DR.Sue の 迦 勒 底 亚 斯</span>
      </router-link>
      <!-- 博客名 end -->

      <!-- 中间菜单 start -->
      <div class="top_navbar_list" media="screen">
        <ul>
          <li v-for="item in navBarList" :key="item.id">
            <router-link :to="item.route">
              <i :class="item.iconfont"></i>
              <span>{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 中间菜单 end -->

      <!-- 右侧字体图标 start -->
      <div class="top_navbar_right">
        <!-- 登陆选项：跳转登陆页面 -->
        <div class="other_login other">
          <i class="iconfont icon-yonghu"></i>
        </div>
        <!-- 搜索选型:弹出遮罩层并进行搜索信息 -->
        <div class="other_search other">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
      <!-- 右侧字体图标 end -->
    </header>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

interface List {
  id: number;
  title: string;
  route: string;
  iconfont: string;
  children?: [];
}

export default {
  name: "Navbar",
  setup() {
    //#region 顶部导航栏的数据
    // let navBarList = ref<[List]>([
    let navBarList = ref([
      {
        id: 1,
        title: "首页",
        route: "/",
        iconfont: "iconfont icon-shouye_huaban",
      },
      // 时间线更新数据
      {
        id: 2,
        title: "归档",
        route: "/timeline",
        iconfont: "iconfont icon-guidangxiangmu",
        children: [],
      },
      // 学习列表
      {
        id: 3,
        title: "清单",
        route: "/list",
        iconfont: "iconfont icon-list-v2",
      },
      // 留言板
      {
        id: 4,
        title: "留言板",
        route: "/message",
        iconfont: "iconfont icon-liuyan",
      },
      // 算法可视化页面
      {
        id: 5,
        title: "示巴",
        route: "/algorithm",
        iconfont: "iconfont icon-yezi",
      },
      // 推荐书籍和读后感
      {
        id: 6,
        title: "迦勒底亚斯",
        route: "/reading",
        iconfont: "iconfont icon-diqiu",
      },
      // 收藏网页
      {
        id: 7,
        title: "彷徨海",
        route: "/collection",
        iconfont: "iconfont icon-haipingmian",
      },
      // 介绍
      {
        id: 7,
        title: "Moon Cancer",
        route: "introduction",
        iconfont: "iconfont icon-guancha",
      },
    ]);
    //#endregion

    return {
      navBarList,
    };
  },
};
</script>

<style lang="scss" scoped>
  /* 引入样式 */
  @import "./index.scss";
</style>