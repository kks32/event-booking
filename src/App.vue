<template>
  <v-app id="app" top-toolbar>
    <header>
      <Toolbar></Toolbar>
    </header>
    <main>
      <v-content>
        <v-container fluid>
        <h3>{{msg}}</h3>
          <router-view></router-view>
        </v-container>
      </v-content>
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
      msg: 'King\'s College Chapel tickets'
    }
  },
  components: {Toolbar, Foot}
}
</script>

// Style
<style lang="stylus">
 @import './stylus/main'
</style>
