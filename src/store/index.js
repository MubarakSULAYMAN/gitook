import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios"
import $api from '@/Api'
import axios from 'axios'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryTerm: '',
    searchResult: [],
    noResult: true,
    // access_token: '035f48430992d2bf7baf91594149ac9941b41fe9',
    username: '',
    userDetails: []
  },

  mutations: {
    SET_QUERY_TERM(state, value) {
      state.queryTerm = value
    },

    UPDATE_SEARCH_RESULT(state, firstData) {
      state.searchResult = firstData
    },

    UPDATE_USER_DETAILS(state, details) {
      state.userDetails = details
    }
  },

  actions: {
    updateSearchResult({ state, commit }) {
      return $api.get(`/users?q=${state.queryTerm}&per_page=10&page=1&sort=undefined&order=undefined`)
        .then((response) => {
          commit('UPDATE_SEARCH_RESULT', response.data.items.map((user) => {
            axios
              .get(`https://api.github.com/users/${user.login}`)
              .then(userInfo => {
                // commit('UPDATE_USER_DETAILS', userInfo.data)

                console.log(userInfo.data);
              })
          }))

          // console.log(response.data.items);

          // if (item_count > 0) {
          //   console.log(response.data);
          //   console.log(item_count);
          //   console.log(Object.keys(response.data.items).length)
          //   console.log(response.data.items)
          //   // for (let x in response.data.items) {
          //   //   console.log(x)
          //   // }
          // }
          // if(Object.keys(response.data).length > 0) {
          //   console.log(response.data);
          //   console.log("Hello");
          //   return !state.noResult
          // }

          return state.noResult
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  },

  getters: {
    username: state => state.queryTerm
  },

  modules: {
  }
})
