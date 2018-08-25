import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/header'
import Home from '@/page/home/home'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Router)
// Vue.use(VueAwesomeSwiper) // 轮播图插件

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
