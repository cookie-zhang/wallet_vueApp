import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Vuelazyload, {
  loading: require('./assets/img/load.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
