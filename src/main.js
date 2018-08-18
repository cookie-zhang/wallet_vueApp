import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
