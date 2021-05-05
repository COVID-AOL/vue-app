import globalAction from '@/store/globalAction.js'

const state = { oxygenCylinderById: null, oxygenCylinders: null }
const mutations = {
  // Success
  findByIdSuccess(state, result) {
    state.oxygenCylinderById = result
  },
  findSuccess(state, result) {
    state.oxygenCylinders = result
  },
  findByCitySuccess(state, result) {
    state.oxygenCylinders = result
  },

  // Errors
  findByIdError(state, err) { },
  findError(state, err) { },
  findByCityError(state, err) { }
}
const actions = {
  findByCity({ commit }, city) {
    return globalAction({ commit }, 'findByCity', {
      url: `/oxygen-cylinders/city/${city}?_sort=verified:DESC`
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
      url: `/oxygen-cylinders?_sort=verified:DESC`,
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}