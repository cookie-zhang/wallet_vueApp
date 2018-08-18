import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/header'
import Home from '@/page/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
