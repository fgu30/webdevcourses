const bus = new Vue()

bus.msg = 'hello world'
bus.$on('changeMsg', (args) => {
  bus.msg = args
})

export default bus