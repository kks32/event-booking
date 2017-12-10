<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="hidden-xs-only">
        <v-date-picker
          class="mt-3"
          v-model="date"
          first-day-of-week=1
          :allowed-dates="allowedDates"
          color="deep-purple darken-4"
          header-color="deep-purple darken-4"
          landscape></v-date-picker>
      </v-flex>
      <v-flex xs12 class="hidden-sm-and-up">
        <v-date-picker
          class="mt-3"
          v-model="date"
          first-day-of-week=1
          color="deep-purple darken-4"
          header-color="deep-purple darken-4"
          :allowed-dates="allowedDates"></v-date-picker>
      </v-flex>
    </v-layout>
    <!-- Session -->
    <v-layout row wrap v-if="this.$store.getters['purchase/getdate'] != ''">
      <v-flex>
        <v-subheader>Select session: {{ this.$store.getters['purchase/getsession'] || 'Not selected' }}</v-subheader>
        <v-card class="grey lighten-4 elevation-1">
          <v-card-text>
            <v-radio-group v-model="session">
              <v-radio label="Morning (9:30 - 12:00)" value="Morning" color="purple darken-4" v-if="sessions.nmorningtickets > 0"/>
              <v-radio label="Afternoon (12:00 - 15:30)" value="Afternoon" color="purple darken-4" v-if="sessions.nafternoontickets > 0"/>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {HTTP} from '../http-common'
export default {
  data () {
    return {
      date: null,
      allowedDates: [],
      session: '',
      sessions: {
        nmorningtickets: 0,
        nafternoontickets: 0
      }
    }
  },
  mounted () {
    this.$store.dispatch('purchase/setsession', this.session)
  },
  created () {
    HTTP.get(`api/v1/dates`)
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
    getsessions () {
      HTTP.get(`api/v1/sessions/` + this.date)
      .then(response => {
        // Parse JSON response for the day
        var session = response.data
        this.sessions.nmorningtickets = session.nmorningtickets
        this.sessions.nafternoontickets = session.nafternoontickets
        this.session = ''
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  watch: {
    session () {
      this.$store.dispatch('purchase/setsession', this.session)
      if (this.session === 'Morning') {
        this.$store.dispatch('purchase/setmaxtickets', this.sessions.nmorningtickets)
      }
      if (this.session === 'Afternoon') {
        this.$store.dispatch('purchase/setmaxtickets', this.sessions.nafternoontickets)
      }
    },
    date () {
      this.$store.dispatch('purchase/setdate', this.date)
      this.getsessions()
    }
  }
}
</script>
