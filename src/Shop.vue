<template>
  <div id="shop">
    <Calendar></Calendar>
    <router-view></router-view>
  </div>
</template>

<script>
import Calendar from './components/Calendar'

export default {
  name: 'shop',
  components: {
    Calendar
  }
}
</script>
