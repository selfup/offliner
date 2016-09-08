import Vue from 'vue'
import Lspi from 'lspi'
import IdeaHelper from './../component-helpers/idea-helper'

const helper = IdeaHelper

const mutations = {
  UPDATE_TITLE (state, newTitle) {
    Vue.set(state, 'title', newTitle)
  },
  UPDATE_BODY (state, newBody) {
    Vue.set(state, 'body', newBody)
  },
  ADD_IDEA (state) {
    const { ideas, title, body } = state

    ideas.unshift({
      title: title,
      body: body,
      quality: 'Swill'
    })

    Vue.set(state, 'ideas', ideas)
    Vue.set(state, 'title', '')
    Vue.set(state, 'body', '')

    helper.lspi.setRecord('ideas', ideas)
  },
  DELETE_IDEA (state, index) {
    const { ideas } = state
    ideas.splice(index, 1)
    Vue.set(state, 'ideas', ideas)
    helper.lspi.setRecord('ideas', ideas)
  },
  CLEAR_ALL_IDEAS (state) {
    Vue.set(state, 'ideas', [])
    helper.lspi.setRecord('ideas', [])
  },
  RELOAD (state) {
    Vue.set(state, 'searched', false)
    Vue.set(state, 'ideas', helper.initIdeas())
  },
  MATCH (state, matchedIdeas) {
    Vue.set(state, 'searched', true)
    if (matchedIdeas[0] !== undefined) Vue.set(state, 'ideas', matchedIdeas)
  },
  EDIT_TILE (state, newText, index) {
    const { ideas } = state
    ideas[index].title = newText
    Vue.set(state, 'ideas', ideas)
    helper.lspi.setRecord('ideas', state.ideas)
  },
  EDIT_BODY (state, newText, index) {
    const { ideas } = state
    ideas[index].body = newText
    Vue.set(state, 'ideas', ideas)
    helper.lspi.setRecord('ideas', state.ideas)
  },
  UP_QUALITY (state, index) {
    const { ideas } = state
    ideas[index].quality = helper.qualityUp[ideas[index].quality]
    Vue.set(state, 'ideas', ideas)
    helper.lspi.setRecord('ideas', state.ideas)
  },
  DOWN_QUALITY (state, index) {
    const { ideas } = state
    ideas[index].quality = helper.qualityDown[ideas[index].quality]
    Vue.set(state, 'ideas', ideas)
    helper.lspi.setRecord('ideas', state.ideas)
  },
  SORT_GENIUS (state) {
    state.helper.sortGenius = false
    Vue.set(state, 'helper', state.helper)
    const { ideas } = state
    ideas.sort((a, b) => { return a.quality > b.quality ? 1 : -1 })
    Vue.set(state, 'ideas', ideas)
  },
  SORT_SWILL (state) {
    state.helper.sortGenius = true
    Vue.set(state, 'helper', state.helper)
    const { ideas } = state
    ideas.sort((a, b) => { return a.quality < b.quality ? 1 : -1 })
    Vue.set(state, 'ideas', ideas)
  }
}

module.exports = mutations
