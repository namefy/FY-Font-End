<template>
  <div class="main">
    <div>
      <menu-item :menu-data="menuData" :origin="true" :collapse="isCollapse" mode="vertical"></menu-item>
    </div>
    <div class="rightPanel" @click.stop="isCollapse=!isCollapse">
      <div v-show="isCollapse" class="el-icon-arrow-right"></div>
      <div v-show="!isCollapse" class="el-icon-arrow-left"></div>
    </div>
  </div>
</template>

<script lang="ts" src='@/scripts/components/SideMenu.ts'></script>
    
<style>
.main {
  display: flex;
}
.rightPanel {
  background-color: #545c64;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.el-menu {
  border: none !important;
}
</style>