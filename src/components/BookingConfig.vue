<template>
<div id="config">
  <v-card class="grey lighten-4 elevation-1">
    <v-card-title class="purple darken-4 white--text">
      <h5>Dates configuration</h5>
    </v-card-title>
    <v-card-text class="grey lighten-4 elevation-1">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-subheader v-text="'Exclude days'"/>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Sunday" v-model="excludedays[0]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
            <v-checkbox label="Monday" v-model="excludedays[1]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Tuesday" v-model="excludedays[2]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Wednesday" v-model="excludedays[3]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Thursday" v-model="excludedays[4]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Friday" v-model="excludedays[5]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Saturday" v-model="excludedays[6]" color="red" hide-details></v-checkbox>
          </v-flex>

          <v-flex xs12>
            <v-subheader v-text="'Exclude dates'"/>
          </v-flex>
          <v-flex xs6>
            <v-date-picker v-model="date" first-day-of-week=1
            color="primary"
            landscape
            ></v-date-picker>
          </v-flex>
          <v-flex xs6>
            <v-btn v-if="this.date!=null" color="red" class="white--text" @click.native="excludedate()">Exclude: {{date}}<v-icon right>delete</v-icon></v-btn>
            <v-btn v-if="this.date!=null" color="green" class="white--text" @click.native="includedate()">Remove exclude: {{date}}<v-icon right>check</v-icon></v-btn>
            <h5>Exclude dates: </h5>
            <p>{{excludedates}}</p>
          </v-flex>
          <v-flex xs12>
            <v-btn
              @click.native=""
              color="orange accent-4"
              dark
              >Preview
              <v-icon right dark>desktop_mac</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-subheader v-text="'Preview'"/>
          </v-flex>
          <v-flex xs12>
            <v-date-picker
              v-model="date"
              first-day-of-week=1
              :allowed-dates="allowedDates"
              dark landscape>
            </v-date-picker>
          </v-flex>
          <v-flex xs12>
            <v-btn
              @click.native=""
              color="green"
              dark
              >Save config
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
          </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
import {HTTP} from '../http-common'
export default {
  'name': 'BookingConfig',
  data () {
    return {
      date: null,
      allowedDates: [],
      // [S M T W T F S]
      excludedays: [false, false, false, false, false, false, false],
      excludedates: []
    }
  },
  created () {
    HTTP.get(`test/dates/`)
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
    excludedate () {
      // Push if element doesn't exist
      if (this.excludedates.indexOf(this.date) === -1) {
        this.excludedates.push(this.date)
      }
      console.log(this.excludedates)
    },
    includedate () {
      const incdate = this.date
      this.excludedates = this.excludedates.filter(item => item !== incdate)
      console.log(this.excludedates)
    }
  }
}
</script>
