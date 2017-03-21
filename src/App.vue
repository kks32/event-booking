<template>
  <div id="app">
    <img src="./assets/logo.png" style="width:100px">
    <welcome></welcome>
    <calendar></calendar>
    <tickets></tickets>
    <ticketselection></ticketselection>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import Calendar from './components/Calendar'
import Tickets from './components/Tickets'
import TicketSelection from './components/TicketSelection'

export default {
  name: 'app',
  components: {
    Welcome,
    Calendar,
    Tickets,
    TicketSelection
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
