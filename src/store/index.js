import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import permission from './modules/premission';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roles:'admin'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    permission
  },
  getters
})
