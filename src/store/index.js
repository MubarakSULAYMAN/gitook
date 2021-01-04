import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResult: [],
    totalResultCount: 0,
  },

  mutations: {
    UPDATE_SEARCH_RESULT(state, result) {
      state.searchResult = result.items
      state.totalResultCount = result.total_count
    },
  },

  actions: {
    updateSearchResult({ commit }, data) {
      commit('UPDATE_SEARCH_RESULT', data)
    }
  },
})
