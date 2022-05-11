import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './types'

export default createStore<IRootState>({
  state() {
    return {
      name: '',
      password: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
