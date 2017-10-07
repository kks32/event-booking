import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueQRCodeComponent from 'vue-qrcode-component'

import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

// Style
require('./stylus/main.styl')

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.component('qr-code', VueQRCodeComponent)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
