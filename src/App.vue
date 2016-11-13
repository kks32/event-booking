<template>
  <div id="app">
    <img src="./assets/logo.png" style="width:100px">
    <welcome></welcome>
    <calendar></calendar>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import Calendar from './components/Calendar'

export default {
  name: 'app',
  components: {
    Welcome,
    Calendar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
