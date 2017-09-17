<template>
  <div id="date">
  	<div class="example">
  		<h6>Check ticket sales date range</h6>
      <v-date-picker
        class="mt-3"
        v-model="date"
        first-day-of-week=1
        :allowed-dates="allowedDates"
        landscape></v-date-picker>
  		<div class="settings">
  			<h5>Settings</h5>
  			<div class="form-group">
  				<label>Start date:</label>
          <v-date-picker
            class="mt-3"
            v-model="startDate"
            first-day-of-week=1
            landscape></v-date-picker>
  			</div>
  			<div class="form-group">
  				<label>End date:</label>
          <v-date-picker
            class="mt-3"
            v-model="endDate"
            first-day-of-week=1
            landscape></v-date-picker>
  			</div>
        <div class="form-group">
          <label>Disable date:</label>
          <v-date-picker
            class="mt-3"
            v-model="disableDate"
            first-day-of-week=1
            landscape></v-date-picker>
        </div>
  			<pre>selected: {{ disabled }}</pre>
  		</div>
  	</div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      date: '',
      disableDate: '',
      startDate: '',
      endDate: '',
      allowedDates: (date) => {
        return (date.getDay() !== 0 && date.getDay() !== 6 && date > new Date())
      }
    }
  }
}
</script>
