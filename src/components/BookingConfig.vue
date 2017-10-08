<template>
<div id="config">
  <v-card class="grey lighten-4 elevation-1">
    <v-card-title class="purple darken-4 white--text">
      <h5>Booking summary</h5>
    </v-card-title>
    <v-card-text class="grey lighten-4 elevation-1">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-subheader v-text="'Exclude days'"/>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Sunday" v-model="excludedays[0]" color="indigo" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
            <v-checkbox label="Monday" v-model="excludedays[1]" color="indigo" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Tuesday" v-model="excludedays[2]" color="indigo" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Wednesday" v-model="excludedays[3]" color="indigo" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Thursday" v-model="excludedays[4]" color="indigo" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Friday" v-model="excludedays[5]" color="indigo" hide-details></v-checkbox>
          </v-flex>
          <v-flex xs3>
             <v-checkbox label="Saturday" v-model="excludedays[6]" color="indigo" hide-details></v-checkbox>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-date-picker
              class="mt-3"
              v-model="date"
              first-day-of-week=1
              color="primary"
              landscape>
            </v-date-picker>
          </v-flex>
        </v-layout>
        <v-btn
          @click.native=""
          color="green"
          dark
          >Save config
          <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
      </v-container>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  'name': 'BookingConfig',
  data () {
    return {
      date: '',
      // [S M T W T F S]
      excludedays: [false, false, false, false, false, false, false],
      excludedates: []
    }
  },
  watch: {
    excludedays () {
      console.log(this.excludedays)
    }
  }
}
</script>
