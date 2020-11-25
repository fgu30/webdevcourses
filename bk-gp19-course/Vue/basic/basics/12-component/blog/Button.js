export default function() {
  Vue.component('blog-button', {
    props: ['title'],
    template: `
      <button @click="handleClick">{{title}}</button>
    `,
    methods: {
      handleClick() {
        this.$emit('click')
      }
    },
  })
}