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

export default {
  data () {
    return {
      date: '',
      allowedDates: (date) => {
        return (date.getDay() !== 0 && date.getDay() !== 6 && date > new Date())
      }
    }
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
