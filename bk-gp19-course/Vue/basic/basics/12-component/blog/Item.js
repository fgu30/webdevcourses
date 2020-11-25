export default function() {
  Vue.component('blog-item', {
    props: ['content'],
    template: `
      <li>{{content}} <blog-button title="进入" @click="handleClick" /></li>
    `,
    methods: {
      handleClick() {
        window.open(this.content, 'newwin')
      }
    },
  })
}