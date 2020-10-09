<template>
  <div>
    <el-row>
      <el-button type="primary" icon="el-icon-plus" @click="handleAddClick">添加</el-button>
    </el-row>
    <Add :is-reload.sync="isReload" :dialog-visible.sync="dialogVisible"></Add>
    <List :is-reload="isReload"></List>
  </div>
</template>

<script>
import List from './intheaters/List'
import Add from './intheaters/Add'

export default {
  data() {
    return {
      dialogVisible: false,
      isReload: false
    }
  },
  components: {
    List,
    Add
  },
  methods: {
    handleAddClick() {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang='stylus' scoped>
.el-row
  text-align left
  padding 10px 0
</style>