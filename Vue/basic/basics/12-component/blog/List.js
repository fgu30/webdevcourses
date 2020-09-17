export default function() {
  Vue.component('blog-list', {
    props: ['list'],
    template: `
      <ul>
        <blog-item 
          v-for="li in list"
          :key="li.id"
          :content="li.content"
        />
      </ul>
    `,
    mounted() {
      console.log('list mounted')
    },
    created() {
      console.log('list created.')
    },
    updated() {
      console.log('list updated.')
    },
  })
}