export default function() {
  Vue.component('blog-form', {
    template: `
      <div>
        <textarea name="" id="" v-model="content" cols="30" rows="10">
        </textarea>
        <br/>
        <blog-button @click="handleAddClick" title="添加" />
      </div>
    `,

    data() {
      return {
        content: ''
      }
    },

    methods: {
      handleAddClick() {
        this.$emit('on-receive-content', this.content)
        this.content = ''
      }
    },

    // 子组件mouted 先调用
    mounted() {
      console.log('form mounted')
    },

    created() {
      console.log('form created.')
    },

    updated() {
      console.log('form updated.')
    },
  })
}