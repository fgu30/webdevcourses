import {
  observable,
  autorun,
  action,
  computed, when, reaction, runInAction
} from 'mobx'

class Store {
  @observable
  x = 0

  @observable
  y = 1

  @observable
  z = []

  @computed
  get doublex() {
    return this.x + this.x
  }

  @action
  setX() {
    this.x = 100
  }

  @action 
  async fzz() {
    await new Promise((resolve) => { 
      setTimeout(() => {
        resolve({
          num: 220,
          str: 'world'
        })
      }, 1000) 
    })
    
    runInAction(() => {
      console.log(0)
    })

    // runInAction(()=>{
    //   store.num = 220
    //   store.str = 'world'
    // })
    // store.x = 220
  }
}

let store = new Store()

// autorun(() => {
//   // console.log(store.x + store.y)
//   // console.log(store.z.length)
//   console.log(store.doublex)
// })

// store.x = 100


// when(() => {
//   return store.x > 0
// }, () => {
//   console.log(store.x)
// })

// store.x = -1

reaction(() => {
  return store.x + store.y
}, (value) => {
  console.log(value)
})

// store.x = 100
store.fzz()

export default Store