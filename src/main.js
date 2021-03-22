import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let data = localStorage.getItem('state')
if (data) {
  data = JSON.parse(data)
  store.commit('setCurrentColor', data.color)
  store.commit('setPrevColor', data.prevColor)
  store.commit('setRestTime', data.restTime)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')