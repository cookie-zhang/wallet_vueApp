import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Find from '@/page/find/find'
import Order from '@/page/order/order'
import My from '@/page/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
