import { observable, action, runInAction } from 'mobx'

import http from '../utils/http'

class Store {
  @observable
  list: Array<any> = []

  @action.bound
  async setList() {
    let result = await http({
      url: 'https://maguangzhao.cn/public/api/dianping/getSwiper',
      method: 'GET'
    })
    runInAction(() => {
      this.list = result.data
    })
  }
}

const store = new Store()

export {
  store,
  Store
}