import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {},
  },
  getters: {
  },
  mutations: {
    isLogin(state): void {
      if (localStorage.getItem('user')) {
        state.isLogin = true
        state.user = JSON.parse(localStorage.getItem('user') || '')
      }
      else
        state.isLogin = false
    }
  },
  actions: {
  },
  modules: {
  }
})
