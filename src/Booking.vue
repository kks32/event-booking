<template>
  <div id="booking">
    <Reports></Reports>
    <Bookings></Bookings>
  </div>
</template>

<script>
import Bookings from './components/Bookings'
import Reports from './components/Reports'
export default {
  name: 'Booking',
  components: {
    Bookings,
    Reports
  }
}
</script>
