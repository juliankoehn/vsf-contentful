import * as types from './mutation-types'
import { actions } from './actions'

export const module = {
  namespaced: true,
  state: {
    entries: [],
    current: []
  },
  mutations: {
    [types.SET_CONTENTFUL] (state, payload) {
      state.entries = payload
    },
    [types.SET_CURRENT] (state, payload) {
      state.current = payload
    },
  },
  actions,
  getters: {
    entries: state => state.entries,
    getCurrentEntry: state => state.current
  }
}
