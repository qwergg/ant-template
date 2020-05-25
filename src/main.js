import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './antview/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; //(打包生产时需注释)

Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
