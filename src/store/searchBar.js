const state = {
  display: false,
}

const mutations = {
  showSearchBarSuccess(state) {
    state.display = true
  },
  hideSearchBarSuccess(state) {
    state.display = false
  }
}

const actions = {
  showSearchBar({ commit }) {
    commit('showSearchBarSuccess')
  },
  hideSearchBar({ commit }) {
    commit('hideSearchBarSuccess')
  }
}

const getters = {
  display: (state) => state.display,
  searchText: (state) => state.searchText
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}