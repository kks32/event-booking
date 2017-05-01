<template>
  <div id="shop">
    <Calendar></Calendar>
    <Session></Session>
  </div>
</template>

<script>
import Calendar from './components/Calendar'
import Session from './components/Session'

export default {
  name: 'shop',
  components: {
    Calendar,
    Session
  }
}
</script>
