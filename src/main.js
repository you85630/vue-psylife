import Vue from 'vue'
import App from './App'

// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 重置全局样式
import 'assets/css/reset.css'
// 引入动画样式
import 'assets/css/animate.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})