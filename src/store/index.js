/**
 * 自动注册 modules
 * modules 名称为文件名称
 * **/
 
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';


const moduleList = require.context('./modules',true,/\.js$/);
const modules = {};
moduleList.keys().forEach((key)=>{
	const name = key.slice(2,-3);
	modules[name] = moduleList(key).default;	
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roles:'admin'
  },
  mutations: {
  },
  actions: {
  },
  modules,
  getters
})
