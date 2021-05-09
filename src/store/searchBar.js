const state = {
  searchText: ''
}

const mutations = {
  changeSearchTextSuccess(state, newText) {
    state.searchText = newText
  },
}

const actions = {
  changeSearchText({ commit }, newText) {
    commit('changeSearchTextSuccess', newText)
  }
}

const getters = {
  searchText: (state) => state.searchText
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}