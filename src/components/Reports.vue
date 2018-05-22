<template>
  <v-layout row wrap class="mb-3">
    <v-snackbar
      :timeout="5000"
      :bottom="true"
      v-model="notification"
    > {{message}}
      <v-btn flat class="pink--text">Close</v-btn>
    </v-snackbar>
    <v-flex xs12>
      <h1>Summary reports</h1>
    </v-flex>
    <v-flex xs12 lg6>
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="startdate"
          label="Report start date"
          persistent-hint
          prepend-icon="event"
        ></v-text-field>
        <v-date-picker v-model="startdate" no-title></v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs12 lg6>
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="enddate"
          label="Report end date"
          persistent-hint
          prepend-icon="event"
        ></v-text-field>
        <v-date-picker v-model="enddate" no-title></v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs12>
      <v-card v-if="showsummary">
          <v-subheader class="bold lighten-1">Summary of bookings from: {{this.startdate}} to: {{this.enddate}}</v-subheader>
          <v-list-tile avatar v-bind:key="summary.total">
            <v-avatar>
              <img src="/static/media/kings.png" style="width:50px;height:50px;" alt="kings">
            </v-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text text--darken-2" v-html="'Total: &#163;' + summary.total"></v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-2" v-html="'Number of tickets: ' + summary.ntickets + ' (students: ' + summary.nconcession +
              ', adults: ' + summary.nadults + ', child: ' + summary.nchild + ')'"></v-list-tile-sub-title>
              <v-list-tile-sub-title class="grey--text text--darken-2" v-html="'Number of guides: ' + summary.nguides + ' (' + summary.guidebooks + ')'"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {HTTP} from '../http-common'
import { getAccessToken } from '../auth'
export default {
  name: 'reports',
  data () {
    return {
      date: null,
      startdate: null,
      enddate: null,
      notification: false,
      message: 'Invalid start and/or end dates, please check the dates!',
      showsummary: false,
      summary: []
    }
  },
  methods: {
    fetchdatesrangesummary () {
      HTTP.get('config/bookings/range/' + this.date, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      })
        .then(response => {
          // JSON responses are automatically parsed.
          this.summary = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  watch: {
    // Watch if start date changes
    startdate () {
      if (this.enddate == null || (this.startdate > this.enddate)) {
        this.notification = true
      }
      if (this.startdate != null && this.enddate != null) {
        this.date = this.startdate + ':' + this.enddate
        this.fetchdatesrangesummary()
        this.showsummary = true
      }
    },
    // Watch if end date changes
    enddate () {
      if (this.startdate == null || (this.startdate > this.enddate)) {
        this.notification = true
      }
      if (this.startdate != null && this.enddate != null) {
        this.date = this.startdate + ':' + this.enddate
        this.fetchdatesrangesummary()
        this.showsummary = true
      }
    }
  }
}
</script>
