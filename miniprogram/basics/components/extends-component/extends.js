const beh = require('./behavior.js')
Component({
  behaviors: [beh],
  data: {
    a: 0,
    c: 1
  },
  computed: {
    b() {
      console.log(0)
      return this.data.a + 100
    },
  },
  methods: {
    onTap() {
      this.setData({
        // a: ++this.data.a,
        c: ++this.data.c,
      })
    }
  }
})