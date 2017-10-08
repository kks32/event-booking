import Vue from 'vue'
import Router from 'vue-router'

import Booking from '@/Booking'
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
    },
    {
      path: '/bookings',
      component: Booking
    }
  ],
  mode: 'history',
  base: __dirname
})
