import Vue from 'vue'
import Router from 'vue-router'

import Admin from '@/Admin'
import Shop from '@/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Shop
    },
    {
      path: '/admin',
      component: Admin
    }
  ],
  mode: 'history',
  base: __dirname
})
