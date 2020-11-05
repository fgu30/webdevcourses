const myBehavior = Behavior({
  data: {
    x: 0
  },

  lifetimes: {
    attached() {
      console.log('behavior attached.')
    }
  },

  methods: {
    show() {
      console.log('show')
    }
  }
})

module.exports = myBehavior