import utils from '@/store/utils'
import globalAction from '@/store/globalAction.js'

const state = { oxygenCylinderById: null, oxygenCylinders: null, filters: null }
const mutations = {
  // Success
  findByIdSuccess(state, newOxygenCylinderById) {
    state.oxygenCylinderById = newOxygenCylinderById
  },
  findSuccess(state, newOxygenCylinders) {
    state.oxygenCylinders = newOxygenCylinders
  },
  findByCitySuccess(state, newOxygenCylinders) {
    state.oxygenCylinders = newOxygenCylinders
  },
  changeFilterSuccess(state, newFilters) {
    state.filters = newFilters
  },

  // Errors
  findByIdError(state, err) { },
  findError(state, err) { },
  findByCityError(state, err) { }
}
const actions = {
  changeFilters({ commit, rootState, dispatch }, newFilters) {
    commit('changeFilterSuccess', newFilters)
    if (rootState.searchBar.searchText !== '') {
      dispatch('findByCity', rootState.searchBar.searchText)
    } else {
      dispatch('find')
    }
  },
  findByCity({ commit }, city) {
    return globalAction({ commit }, 'findByCity', {
      url: `/oxygen-cylinders/city/${city}?_sort=verified:DESC${utils.formatFilters(state.filters)}`
    })
  },
  findById({ commit }, id) {
    return globalAction({ commit }, 'findById', {
      url: `/oxygen-cylinders/${id}`,
      method: 'GET'
    })
  },
  find({ commit }) {
    return globalAction({ commit }, 'find', {
      url: `/oxygen-cylinders?_sort=verified:DESC${utils.formatFilters(state.filters)}`,
      method: 'GET'
    })
  }
}
const getters = {
  list: (state) => {
    if (state.oxygenCylinders === null) return []
    return state.oxygenCylinders
  },
  oxygenCylinderById: (state) => {
    return state.oxygenCylinderById
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