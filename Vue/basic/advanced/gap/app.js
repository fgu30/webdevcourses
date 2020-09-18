const App = function(bus) {
  const comp3 = {
    template: `
      <div>comp3</div>
    `
  }
  const comp4 = {
    template: `
      <div>comp4-{{x}} - {{bus.msg}}</div>
    `,
    inject: ['x', 'bus'],
    mounted() {
      bus.$emit('changeMsg', 'aa')
    },
  }
  
  const comp1 = {
    template: `
      <div>
        <h1>comp1-{{x}}</h1>
        <comp3></comp3>
        <comp4></comp4>
      </div>
    `,
    components: {
      comp3,
      comp4
    },
    inject: ['x', 'changeX'],
    mounted() {
      this.changeX()
    },
  }
  const comp2 = {
    template: `
      <h1>comp2</h1>
    `
  }
  
  const vm = new Vue({
    el: '#root',
    components: {
      comp1,
      comp2
    },
    provide: {
      x: 100,
      bus,
      changeX() {
        // 修改了provide, 后代组件是否响应（NO）
        // 不要在后代组件里试图修改provide的属性
        // this.x = 200
      }
    },
  })
}

export default App