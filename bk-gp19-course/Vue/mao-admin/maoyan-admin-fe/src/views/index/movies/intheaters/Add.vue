<template>
  <div class="add">
    <el-dialog @close="handleClose" title="添加-正在热映" :visible.sync="dialogFormVisible">
      <el-form ref="movie-form" :model="form">
        <el-form-item label="影片海报" :label-width="formLabelWidth">
          <el-upload
            name="poster"
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :auto-upload="false"
            :show-file-list="true"
            :limit="1"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>

        </el-form-item>
        <el-form-item label="影片名称" :label-width="formLabelWidth">
          <el-input v-model="form.nm" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="热度" :label-width="formLabelWidth">
          <el-input v-model="form.wish" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上映时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.rt"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="主演" :label-width="formLabelWidth">
          <el-input v-model="form.star" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancelClick">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import http from '@/utils/http.js'
import qs from 'querystringify'
export default {
  props: {
    dialogVisible: {
      type: Boolean
    }
  },

  mounted() {
    // this.$refs('aaa').on('close', () => {
    //   console.log(0)
    // })
  },

  data() {
    return {
      form: {
        nm: '',
        wish: '',
        rt: '',
        star: '',
        poster: ''
      },
      formLabelWidth: 'auto',
      dialogFormVisible: false
    }
  },

  watch: {
    dialogVisible(value) {
      this.dialogFormVisible = value
    }
  },

  // computed: {
  //   dialogFormVisible: {
  //     set() {
        
  //     },
  //     get() {
  //       return this.dialogVisible
  //     }
  //   }
  // },

  methods: {
    handleCancelClick() {
      this.dialogFormVisible = false
    },

    handleClose() {
      this.$emit('update:dialogVisible', false)
    },

    async handleSubmit() {
      let result = await http.post('/api/movies/add', qs.stringify(this.form))
      this.$message(result.data.message)
      this.dialogFormVisible = false

      // this.$router.replace({name: 'intheaters', query: {
      //   _: new Date().getTime()
      // }})

      this.$emit('update:isReload', true)
    }
  }
}
</script>

<style lang='stylus' scoped>
.add
  text-align left
</style>