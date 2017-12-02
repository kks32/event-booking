import Vue from 'vue'
import Router from 'vue-router'

import Booking from '@/Booking'
import Callback from '@/components/Callback'
import Config from '@/Config'
import Shop from '@/Shop'

import { requireAuth } from '../auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Shop
    },
    {
      path: '/config',
      beforeEnter: requireAuth,
      component: Config
    },
    {
      path: '/bookings',
      beforeEnter: requireAuth,
      component: Booking
    },
    {
      path: '/callback',
      component: Callback
    }
  ],
  mode: 'history',
  base: __dirname
})
