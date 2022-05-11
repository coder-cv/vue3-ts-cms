import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'
import { accoutLoginRequest } from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: ''
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accoutLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
    }
  }
}

export default loginModule
