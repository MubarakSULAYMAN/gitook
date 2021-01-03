import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios"
// import $api from '@/Api'
// import axios from 'axios'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // queryTerm: '',
    searchResult: [],
    noResult: true,
    totalResultCount: 0,
    // access_token: '035f48430992d2bf7baf91594149ac9941b41fe9',
    // username: '',
    // userDetails: []
  },

  mutations: {
    // SET_QUERY_TERM(state, value) {
    //   state.queryTerm = value
    // },

    UPDATE_SEARCH_RESULT(state, result) {
      state.searchResult = result.items
      state.totalResultCount = result.total_count
      console.log('update')
    },

    // UPDATE_USER_DETAILS(state, details) {
    //   state.userDetails = details
    // }
  },

  actions: {
    updateSearchResult({ commit }, data) {
      commit('UPDATE_SEARCH_RESULT', data)
      console.log('action')
    }
  },

  // getters: {
  //   username: state => state.queryTerm
  // },

  modules: {
  }
})
