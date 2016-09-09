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

  it('can add an idea using vuex', () => {
    vm.$options.store.dispatch('UPDATE_TITLE', 'hello')
    expect(vm.$options.store.state.title).toBe('hello')

    vm.$options.store.dispatch('UPDATE_BODY', 'world')
    expect(vm.$options.store.state.body).toBe('world')

    vm.$options.store.dispatch('ADD_IDEA')
    expect(vm.$options.store.state.ideas[0].title).toBe('hello')
    expect(vm.$options.store.state.ideas[0].body).toBe('world')
    expect(vm.$options.store.state.ideas[0].quality).toBe('Swill')
  })
})
