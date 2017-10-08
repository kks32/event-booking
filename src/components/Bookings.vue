<template>
  <v-layout row wrap>
    <v-flex>
      <h4 class="mb-3">Bookings</h4>
      <v-card>
        <v-list three-line>
          <template v-for="session in sessions">
            <v-subheader class="bold grey lighten-1">{{session}} bookings</v-subheader>
            <template v-for="booking in bookings" v-if="booking.session === session">
              <v-list-tile avatar v-bind:key="booking.name" :href="baseurl + date">
                <v-avatar>
                  <img src="/static/media/kings.png" style="width:50px;height:50px;" alt="kings">
                </v-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="booking.name"></v-list-tile-title>
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
      date: '2017-10-19',
      baseurl: '/bookings/',
      sessions: ['Morning', 'Aternoon'],
      bookings: []
    }
  },
  created () {
    HTTP.get('bookings/date/' + this.date)
      .then(response => {
        // JSON responses are automatically parsed.
        this.bookings = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
