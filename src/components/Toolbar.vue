<template>
  <v-toolbar class="purple darken-4 white--text">
  <v-toolbar-title>{{title}}</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
  <v-toolbar-items class="hidden-sm-and-down" v-for="(item,i) in items" :key="i">
    <v-btn class="purple darken-4 white--text" v-if="isLoggedIn() == item.show" :href="item.link" :router="item.router">{{item.title}}</v-btn>
  </v-toolbar-items>
  <button class="btn btn-danger log" v-show="isLoggedIn()" @click="handleLogout()">Log out </button>
  <button class="btn btn-info log" v-show="!isLoggedIn()" @click="handleLogin()">Log In</button>
  </v-toolbar>
</template>

<script>
import { isLoggedIn, login, logout } from '../auth'
export default {
  name: 'Toolbar',
  data () {
    return {
      title: 'King\'s College, Cambridge',
      items: [
        {'title': 'contact us', 'link': '/contact', 'show': false, 'router': false},
        {'title': 'bookings', 'link': '/bookings', 'show': true, 'router': false},
        {'title': 'config', 'link': '/config', 'show': true, 'router': false},
        {'title': 'shop', 'link': '/', 'show': false, 'router': false}
      ]
    }
  },
  methods: {
    handleLogin () {
      login()
    },
    handleLogout () {
      logout()
    },
    isLoggedIn () {
      return isLoggedIn()
    }
  }
}
</script>
