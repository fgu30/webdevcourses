<template>
  <div class="navmenu">
    <el-menu 
      :router="true" 
      :default-openeds="['1', '2']"
      :default-active="$route.path"
    >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>电影管理</template>
        <el-menu-item index="/intheaters">正在热映</el-menu-item>
        <el-menu-item index="/comingsoon">即将上映</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
        <el-menu-item index="/index/userlist">用户列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='stylus' scoped>
.navmenu
  height 100%
  .el-menu
    height 100%
</style>

<style lang='stylus'>
aside
  padding 0 !important
</style>