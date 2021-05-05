import Vue from 'vue'
import Vuex from 'vuex'

// Various Modules
import bed from '@/store/bed'
import searchBar from '@/store/searchBar'
import oxygenCylinder from '@/store/oxygenCylinder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    bed, searchBar, oxygenCylinder
  }
})
