<template>
  <div>
    <el-container>
      <el-header style="height:10vh;">
        <top-menu :menu-data="menuData"></top-menu>
      </el-header>
      <el-container style="height:80vh;">
        <el-aside>aside</el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer style="height:10vh;">footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";
import router from "@/router/index.ts";
export default {
  components: {
    "top-menu": TopMenu
  },
  data() {
    return {
      menuData: [
        {
          icon: "el-icon-location",
          path: "#",
          title: "我是菜单",
          children: [
            {
              icon: "el-icon-info",
              path: "home",
              title: "我是菜单的菜单",
              children: null
            }
          ]
        },
        {
          icon: "el-icon-location",
          path: "#2",
          title: "我是菜单2",
          children: [
            {
              icon: "el-icon-info",
              path: "home2",
              title: "我是菜单的菜单2",
              children: null
            }
          ]
        }
      ]
    };
  },
  router
};
</script>

<style>
</style>
