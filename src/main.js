import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import Admin from './Admin'
import App from './App'
import Shop from './Shop'
import store from './vuex/store'

Vue.config.productionTip = false

// Style
require('./stylus/main.styl')

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Shop
  },
  {
    path: '/admin',
    component: Admin
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
