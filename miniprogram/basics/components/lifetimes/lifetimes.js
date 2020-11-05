// components/lifetimes/lifetimes.js
Component({
  lifetimes: {
    attached() {
      console.log('attached')
    },
    ready() {
      console.log('ready')
    }
  },
  pageLifetimes: {
    show() {
      console.log('show')
    }
  }
})
