import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timing: {
      green: 15,
      yellow: 3,
      red: 10
    },
    blink: 3,
    restTime: 15,
    prevColor: 'yellow',
    currentColor: 'green'
  },
  mutations: {
    setCurrentColor: (state, val) => state.currentColor = val,
    setPrevColor: (state, val) => state.prevColor = val,
    setRestTime: (state, val) => state.restTime = val,
  },
  actions: {
    nextLight({ state, commit }) {
      let nextLight

      if (['green', 'red'].indexOf(state.currentColor) != -1) {
        nextLight = 'yellow'
      } else {
        nextLight = state.prevColor == 'green' ? 'red' : 'green'
      }

      commit('setPrevColor', state.currentColor)
      commit('setRestTime', state.timing[nextLight])

      return nextLight
    }
  },
  modules: {}
})