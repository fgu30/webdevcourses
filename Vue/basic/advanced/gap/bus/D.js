import bus from './Bus.js'

const D = {
  template: `
    <p>component D - {{bus.msg}}</p>
  `,

  beforeCreate() {
    this.bus = bus
  },

  mounted() {
    // 在当前模块内定义的变量，是不能在当前组件的实例上使用的
    // console.log(this.bus)

    this.bus.$emit('changeMsg', 'world')
    this.$forceUpdate()
  },
}

export default D