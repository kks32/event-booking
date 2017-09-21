<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="hidden-xs-only">
        <v-date-picker
          class="mt-3"
          v-model="date"
          first-day-of-week=1
          :allowed-dates="allowedDates"
          landscape></v-date-picker>
         <v-btn v-if="this.date!=''" class="primary white--text" @click.native="setdate()">Accept: {{date}}<v-icon right>check_circle</v-icon></v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      date: '',
      allowedDates: ['2017-09-21', '2017-09-22']
    }
  },
  created () {
    axios.get(`http://localhost:4000/api/v1/dates/`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.allowedDates = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  mounted () {
    const d = new Date()
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    const year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day
    this.date = [year, month, day].join('-')
  },
  methods: {
    setdate () {
      this.$store.dispatch('purchase/setdate', this.date)
    }
  }
}
</script>
