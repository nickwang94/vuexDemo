import Vue from 'vue'
import Vuex from 'vuex'

// 通过use将vuex安装到项目中
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 定义全局共享数据
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  getters: {
    showNum (state) {
      return '当前最新数量为【' + state.count + '】'
    }
  },
  modules: {
  }
})
