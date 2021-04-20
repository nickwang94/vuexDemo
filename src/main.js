import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store, // vue中所有组件可以访问全局共享
  render: h => h(App)
}).$mount('#app')
