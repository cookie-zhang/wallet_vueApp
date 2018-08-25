import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
