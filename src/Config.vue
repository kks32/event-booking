<template>
  <div id="admin">
    <BookingConfig></BookingConfig>
    <Prices></Prices>
  </div>
</template>

<script>
import BookingConfig from './components/BookingConfig'
import Prices from './components/Prices'
export default {
  name: 'Config',
  components: {
    BookingConfig,
    Prices
  }
}
</script>
