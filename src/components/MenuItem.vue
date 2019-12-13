<template>
  <div>
    <template v-if="origin">
      <el-menu
        :collapse="collapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
        :mode="mode"
      >
        <template v-for="m in menuData">
          <el-submenu v-if="m.children" v-bind:key="m.title" :index="m.path">
            <template slot="title">
              <i v-if="m.icon" :class="m.icon"></i>
              <span slot="title">{{m.title}}</span>
            </template>
            <menu-item :menuData="m.children" :origin="false"></menu-item>
          </el-submenu>
          <el-menu-item v-else v-bind:key="m.title" :index="m.path">
            <template slot="title">
              <i v-if="m.icon" :class="m.icon"></i>
              <span slot="title">{{m.title}}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </template>
    <template v-else>
      <template v-for="m in menuData">
        <el-submenu v-if="m.children" v-bind:key="m.title" :index="m.path">
          <template slot="title">
            <i v-if="m.icon" :class="m.icon"></i>
            <span slot="title">{{m.title}}</span>
          </template>
          <menu-item :menuData="m.children" :origin="false"></menu-item>
        </el-submenu>
        <el-menu-item v-else v-bind:key="m.title" :index="m.path">
          <template slot="title">
            <i v-if="m.icon" :class="m.icon"></i>
            <span slot="title">{{m.title}}</span>
          </template>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>
<script lang="ts" src='@/scripts/components/MenuItem.ts'>
</script>