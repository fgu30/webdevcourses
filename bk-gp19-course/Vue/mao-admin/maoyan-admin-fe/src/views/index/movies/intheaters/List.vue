<template>
<div>
  <el-table
    :data="currentDataSource"
    style="width: 100%">
    <el-table-column
      label="海报"
      width="100">
      <template>
        <img :src="`http://placehold.it/50x50`" width="50" height="50" alt="">
      </template>
    </el-table-column>
    <el-table-column
      prop="nm"
      label="电影名称">
    </el-table-column>
    <el-table-column
      prop="rt"
      label="上映时间">
    </el-table-column>
    <el-table-column
      prop="wish"
      label="热度">
    </el-table-column>
    <el-table-column
      prop="star"
      label="主演">
    </el-table-column>
    <el-table-column label="操作" width="200">
      <template v-slot="scope">
        <el-button
          size="mini"
        >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    @current-change="handleChange"
  >
  </el-pagination>
</div>
  
</template>

<script>
import http from '@/utils/http'
export default {
  props: {
    isReload: {
      type: Boolean
    }
  },

  created() {
    this.pageSize = 5
  },

  data() {
    return {
      datasource: [],
      currentDataSource: [],
      currentPage: 0,
      total: 0
    }
  },

  async mounted() {
    this.loadData()
  },

  methods: {
    handleChange(currentPage) {
      this.currentPage = currentPage - 1
      this.sliceDataSource()
    },

    async loadData() {
      let result = await http.get('/api/movies/list')
      // let arr = result.map((value, index) => {
      //   let { nm } = value
      //   return {
      //     nm
      //   }
      // })

      let message = result.data.message
      this.datasource = message
      this.total = message.length

      this.sliceDataSource()
    },

    sliceDataSource() {
      let start = this.currentPage * this.pageSize
      let end = start + this.pageSize
      this.currentDataSource = this.datasource.slice(start, end)
    }
  },

  watch: {
    isReload() {
      this.loadData()
    }
  }
}
</script>

<style lang="stylus">
.el-pagination
  text-align right
  margin-top 20px
  background #fff
  padding 20px 0
</style>