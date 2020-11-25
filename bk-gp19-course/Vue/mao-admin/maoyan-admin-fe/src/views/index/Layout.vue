<template>
 <div class="index">
    <el-container>
      <el-header>
        <div>猫眼电影管理系统</div>
        <div>
          欢迎 admin <span>登出</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavMenu></NavMenu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>@copyright gp19</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  components: {
    NavMenu
  }
}
</script>

<style lang='stylus' scoped>
.index
  height 100%

.el-header, .el-footer {
  background-color: #ef4238;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-header
  display flex
  justify-content space-between
  div
    &:first-child
      color #ffffff
      font-size 18px
    &:last-child
      color #ffffff
      font-size 14px
.el-footer
  color #ffffff
  font-size 12px

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  margin-bottom 0
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

.el-container
  height 100%
</style>