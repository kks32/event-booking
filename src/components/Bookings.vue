<template>
  <v-layout row wrap>
    <v-flex>
      <h4 class="mb-3">Bookings</h4>
      <v-date-picker
        class="mt-3"
        v-model="date"
        first-day-of-week=1
        :allowed-dates="allowedDates"
        color="purple"
        landscape></v-date-picker>
      <v-card>
        <v-list three-line>
          <template v-for="session in sessions">
            <v-subheader class="bold grey lighten-1">{{date}} {{session}} bookings</v-subheader>
            <template v-for="booking in bookings" v-if="booking.session === session">
              <v-list-tile avatar v-bind:key="booking.name">
                <v-avatar>
                  <img src="/static/media/kings.png" style="width:50px;height:50px;" alt="kings">
                </v-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="booking.name + ' - ' + booking.uuid"></v-list-tile-title>
                  <v-list-tile-sub-title class="grey--text text--darken-2" v-html="'Number of tickets: ' + booking.ntickets"></v-list-tile-sub-title>
                  <v-list-tile-sub-title class="grey--text text--darken-2" v-html="'Number of guides: ' + booking.nguides"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {HTTP} from '../http-common'

export default {
  name: 'bookings',
  data () {
    return {
      date: null,
      allowedDates: [],
      baseurl: '/bookings/',
      sessions: ['Morning', 'Afternoon'],
      bookings: []
    }
  },
  created () {
    HTTP.get(`dates`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.allowedDates = response.data
      if (this.allowedDates.length > 0) {
        this.date = this.allowedDates[0]
      } else {
        this.date = null
      }
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    fetchbookings () {
      HTTP.get('bookings/date/' + this.date)
        .then(response => {
          // JSON responses are automatically parsed.
          this.bookings = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  watch: {
    date () {
      this.fetchbookings()
    }
  }
}
</script>
