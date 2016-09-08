import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state'
import mutations from './store/mutations'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  strict: true
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
