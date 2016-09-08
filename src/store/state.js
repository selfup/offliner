import IdeasHelper from './../component-helpers/idea-helper'

const state = {
  helper: IdeasHelper,
  ideas: IdeasHelper.initIdeas(),
  title: '',
  body: '',
  searched: false
}

module.exports = state
