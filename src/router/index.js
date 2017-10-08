import Vue from 'vue'
import Router from 'vue-router'

import Config from '@/Config'
import Shop from '@/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Shop
    },
    {
      path: '/config',
      component: Config
    }
  ],
  mode: 'history',
  base: __dirname
})
