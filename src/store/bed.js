import utils from '@/store/utils'
import globalAction from '@/store/globalAction.js'

const state = { bedById: null, beds: null, filters: null }
const mutations = {
  // Success
  findByIdSuccess(state, newBedById) {
    state.bedById = newBedById
  },
  findSuccess(state, newBeds) {
    state.beds = newBeds
  },
  findByCitySuccess(state, newBeds) {
    state.beds = newBeds
  },
  changeFiltersSuccess(state, newFilters) {
    state.filters = newFilters
  },

  // Errors
  findByIdError(state, err) { },
  findError(state, err) { },
  findByCityError(state, err) { }
}
const actions = {
  changeFilters({ commit }, newFilters) {
    commit('changeFiltersSuccess', newFilters)
  },
  findByCity({ commit }, city) {
    return globalAction({ commit, state }, 'findByCity', {
      url: `/beds/city/${city}?_sort=verified:DESC${utils.formatFilters(state.filters)}`
    })
  },
  findById({ commit }, id) {
    return globalAction({ commit }, 'findById', {
      url: `/beds/${id}`,
      method: 'GET'
    })
  },
  find({ commit }) {
    return globalAction({ commit, state }, 'find', {
      url: `/beds?_sort=verified:DESC${utils.formatFilters(state.filters)}`,
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
  },
  filters: (state) => {
    return state.filters
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}