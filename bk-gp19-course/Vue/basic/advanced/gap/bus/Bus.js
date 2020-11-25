const bus = new Vue()

bus.msg = 'hello'
bus.$on('changeMsg', (msg) => {
  bus.msg = msg
})

export default bus