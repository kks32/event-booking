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
             <v-checkbox label="Sunday" v-model="config.excludedays[0]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
            <v-checkbox label="Monday" v-model="config.excludedays[1]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Tuesday" v-model="config.excludedays[2]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Wednesday" v-model="config.excludedays[3]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Thursday" v-model="config.excludedays[4]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Friday" v-model="config.excludedays[5]" color="red" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Saturday" v-model="config.excludedays[6]" color="red" hide-details></v-checkbox>
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
            <p>{{config.excludedates}}</p>
          </v-flex>
          <v-flex xs12>
            <v-btn
              @click.native="test_config()"
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
              v-model="previewdate"
              first-day-of-week=1
              :allowed-dates="allowedDates"
              dark landscape>
            </v-date-picker>
          </v-flex>
          <v-flex xs12>
            <v-btn
              @click.native="update_config()"
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
      previewdate: null,
      allowedDates: [],
      config: {
        nmorningtickets: 500,
        nafternoontickets: 500,
        // [S M T W T F S]
        excludedays: [false, false, false, false, false, false, false],
        excludedates: []
      }
    }
  },
  created () {
    this.get_testdates()
  },
  methods: {
    test_config () {
      HTTP.post('test/config/dates', this.config)
        .then(response => {
          this.get_testdates()
        })
        .catch(e => {
          this.errorbar = true
          this.errors.push(e)
        })
    },
    get_testdates () {
      HTTP.get(`test/dates`)
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
    update_config () {
      HTTP.post('config/dates', this.config)
        .then(response => {
          this.$router.push({path: '/'})
        })
        .catch(e => {
          this.errorbar = true
          this.errors.push(e)
        })
    },
    excludedate () {
      // Push if element doesn't exist
      if (this.config.excludedates.indexOf(this.date) === -1) {
        this.config.excludedates.push(this.date)
      }
      console.log(this.config.excludedates)
    },
    includedate () {
      const incdate = this.date
      this.config.excludedates = this.config.excludedates.filter(item => item !== incdate)
      console.log(this.config.excludedates)
    }
  }
}
</script>
