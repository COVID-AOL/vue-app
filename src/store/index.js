import Vue from 'vue'
import Vuex from 'vuex'

// Various Modules
import bed from '@/store/bed'
import searchBar from '@/store/searchBar'
import oxygenCylinder from '@/store/oxygenCylinder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedResource: null
  },
  mutations: {
    changeSelectedResourceSuccess(state, newResource) {
      state.selectedResource = newResource
    }
  },
  actions: {
    changeSelectedResource({ commit }, newResource) {
      commit('changeSelectedResourceSuccess', newResource)
    }
  },
  getters: {
    selectedResource: (state) => state.selectedResource
  },
  modules: {
    bed, searchBar, oxygenCylinder
  }
})
