import Vue from 'vue'
import Vuex from 'vuex'
import state from './../../src/store/state'
import mutations from './../../src/store/mutations'
import App from './../../src/App.vue'

describe('App.vue', () => {
  Vue.use(Vuex)

  const store = new Vuex.Store({
    state,
    mutations,
    strict: true
  })

  const entryPoint = document.createElement('div')
  entryPoint.setAttribute('id', 'app')

  const vm = new Vue({
    el: entryPoint,
    store,
    render: h => h(App)
  })

  it('should render correct contents and have correct default state', () => {
    expect(vm.$el.querySelector('h2').textContent).toBe('Idea Box in Vue.js!')
    expect(vm.$options.store.state.ideas).toEqual([])
    expect(vm.$options.store.state.title).toBe('')
    expect(vm.$options.store.state.body).toBe('')
    expect(vm.$options.store.state.searched).toBe(false)
    expect(typeof vm.$options.store.state.helper).toBe('object')
  })
})
