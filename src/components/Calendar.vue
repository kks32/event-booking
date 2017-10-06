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
import {HTTP} from '../http-common'
export default {
  data () {
    return {
      date: '',
      allowedDates: []
    }
  },
  created () {
    HTTP.get(`dates/`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.allowedDates = response.data
      if (this.allowedDates.length > 0) {
        this.date = this.allowedDates[0]
      } else {
        this.date = ''
      }
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    setdate () {
      this.$store.dispatch('purchase/setdate', this.date)
    }
  }
}
</script>

<style>
.application .theme--light.picker .picker__title {
  background-color: #4a148c;
}
</style>
