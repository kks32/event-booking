<template>
  <v-app id="app" top-toolbar>
    <header>
      <Toolbar></Toolbar>
    </header>
    <main>
      <v-layout row wrap>
        <v-container fluid>
        <h3>{{msg}}</h3>
          <router-view></router-view>
        </v-container>
      </v-layout>
    </main>
    <Foot></Foot>
  </v-app>
</template>

<script>
import Foot from './components/Footer'
import Toolbar from './components/Toolbar'

export default {
  data () {
    return {
      msg: 'King\'s College (Chapel and Grounds) tickets'
    }
  },
  components: {Toolbar, Foot}
}
</script>

// Style
<style lang="stylus">
 @import './stylus/main'
</style>
