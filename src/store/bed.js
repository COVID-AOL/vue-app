import globalAction from '@/store/globalAction.js'

const state = { bedById: null, beds: null }
const mutations = {
  // Success
  findByIdSuccess(state, result) {
    state.bedById = result
  },
  findSuccess(state, result) {
    state.beds = result
  },
  findByCitySuccess(state, result) {
    state.beds = result
  },

  // Errors
  findByIdError(state, err) { },
  findError(state, err) { },
  findByCityError(state, err) { }
}
const actions = {
  findByCity({ commit }, city) {
    return globalAction({ commit }, 'findByCity', {
      url: `/beds/city/${city}`
    })
  },
  findById({ commit }, id) {
    return globalAction({ commit }, 'findById', {
      url: `/beds/${id}`,
      method: 'GET'
    })
  },
  find({ commit }) {
    return globalAction({ commit }, 'find', {
      url: `/beds?_limit=10`,
      method: 'GET'
    })
  }
}
const getters = {
  list: (state) => {
    if (state.beds === null) return []
    return state.beds
  },
  bedById: (state) => {
    return state.bedById
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}