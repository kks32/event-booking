<template>
<div id="tickets">
  <v-snackbar
    :timeout="10000"
    :bottom="true"
    v-model="nguideerror"
  >     Guide books selection is invalid! Number of guidebooks doesn't match number of languages.
        <v-btn flat class="pink--text">Close</v-btn>
  </v-snackbar>
  <v-snackbar
    :timeout="10000"
    :bottom="true"
    v-model="nticketerror"
  >     Number of tickets is more than available. Only {{this.$store.getters['purchase/getmaxtickets']}} are available.
        <v-btn flat class="pink--text">Close</v-btn>
  </v-snackbar>
  <v-alert error v-bind:value="ntickets > 10 ? true : false">
    Number of tickets cannot be more than 10.
  </v-alert>
  <v-card class="grey lighten-4 elevation-1">
    <v-card-title class="purple darken-4 white--text">
      <h5>Tickets</h5>
    </v-card-title>
    <v-card-text class="grey lighten-4 elevation-1">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6 class="text-lg-left">
            <h6>Category</h6>
          </v-flex>
          <v-flex xs3 class="text-lg-middle">
            <h6># of tickets</h6>
          </v-flex>
          <v-flex xs3 class="total text-lg-middle">
            <h6>Total (£)</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader v-text="'Adult tickets'" />
          </v-flex>
          <v-flex xs3>
            <v-select label="Select" v-bind:items="items" v-model="adult"
            v-bind:rules="[() => ((adult && adult > 0) || concession > 0) || 'Please select at least one ticket']"
            max-height="200" light item-value="number" single-line auto />
          </v-flex>
          <v-flex xs3 class="text-md-center">
            <p>{{ (adultprice).toFixed(2) }}</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader>Children <span title="Child ticket is for 12 – 17 years and there is no charge for children 11 and under."><v-icon class="pl-2 grey--text text--darken-2">info</v-icon></span>
            </v-subheader>
          </v-flex>
          <v-flex xs3>
            <v-select v-bind:items="items" v-model="children" label="Select" max-height="200" light single-line auto />
          </v-flex>
          <v-flex xs3 class="text-md-center">
            <p>{{ (childprice).toFixed(2) }}</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader>Student <span title="The concession ticket is for students with a valid ID card."><v-icon class="pl-2 grey--text text--darken-2">info</v-icon></span>
            </v-subheader>
          </v-flex>
          <v-flex xs3>
            <v-select label="Select" v-bind:items="items" v-model="concession"
            v-bind:rules="[() => ((concession && concession > 0) || adult > 0) || 'Please select at least one ticket']"
            max-height="200" light item-value="number" single-line auto />
          </v-flex>
          <v-flex xs3 class="text-md-center">
            <p>{{ (concessionprice).toFixed(2) }}</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs3>
            <v-subheader v-text="'Guide books'" />
          </v-flex>
          <v-flex xs3>
            <v-select
              v-model="guides"
              label="Select guidebook languages"
              :items="guidebooks"
              item-text="lang"
              item-value="id"
              multiple
              chips
            ></v-select>
          </v-flex>
          <v-flex xs3>
            <v-select label="Select total copies" v-bind:items="items" v-model="nguidebooks"
              max-height="200" light item-value="number" single-line auto />
          </v-flex>
          <v-flex xs3 class="text-md-center">
            <p>{{ (guideprice).toFixed(2) }}</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs9 class="text-lg-right">
            <h6>Total</h6>
          </v-flex>
          <v-flex xs3 class="text-lg-center">
            <p><strong>£ {{ total }}</strong></p>
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
  'name': 'Tickets',
  data () {
    return {
      adult: 0,
      children: 0,
      concession: 0,
      nguidebooks: 0,
      adultcost: 0,
      childcost: 0,
      concessioncost: 0,
      guidecost: 0,
      nguideerror: false,
      nticketerror: false,
      guides: [],
      guidebooks: [
        {id: 1, lang: 'English'},
        {id: 2, lang: 'French'},
        {id: 3, lang: 'German'},
        {id: 4, lang: 'Italian'},
        {id: 5, lang: 'Japanese'},
        {id: 6, lang: 'Mandarin'},
        {id: 7, lang: 'Spanish'}
      ],
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  created () {
    HTTP.get(`prices/`)
    .then(response => {
      // JSON responses are automatically parsed.
      const prices = response.data
      this.adultcost = prices.adultprice
      this.childcost = prices.childprice
      this.concessioncost = prices.concessionprice
      this.guidecost = prices.guideprice
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
    adultprice () {
      return this.adult * this.adultcost
    },
    childprice () {
      return this.children * this.childcost
    },
    concessionprice () {
      return this.concession * this.concessioncost
    },
    guideprice () {
      return this.nguidebooks * this.guidecost
    },
    total () {
      return (this.adultprice + this.childprice + this.concessionprice + this.guideprice).toFixed(2)
    },
    ntickets () {
      return this.adult + this.children + this.concession
    }
  },
  watch: {
    guides () {
      this.guidebookerror()
    },
    nguidebooks () {
      this.guidebookerror()
    },
    total () {
      this.$store.dispatch('purchase/setntickets', this.ntickets)
      this.$store.dispatch('purchase/set_nguidebooks', this.nguidebooks)
      this.$store.dispatch('purchase/settotal', this.total)
      this.$store.dispatch('purchase/set_ticketvalidation', this.validate())
    },
    ntickets () {
      if (this.ntickets > this.$store.getters['purchase/getmaxtickets']) {
        this.nticketerror = true
      } else {
        this.nticketerror = false
      }
      this.$store.dispatch('purchase/set_ticketvalidation', this.validate())
    }
  },
  methods: {
    // Throws an error if the number of guidebooks doesn't match number of
    // selected guidebook languages
    guidebookerror () {
      if (((this.guides.length > 0 || this.nguidebooks > 0) &&
           this.guides.length > this.nguidebooks) ||
           (this.nguidebooks > 0 && this.guides.length === 0)) {
        this.nguideerror = true
      } else {
        this.nguideerror = false
      }
      this.validate()
    },
    validate () {
      return (// Set Maximum of 10 tickets for sale and is more than 0
              this.$store.getters['purchase/getntickets'] <= 10 &&
              this.$store.getters['purchase/getntickets'] > 0 &&
              // Check if a student or an adult ticket is found
              (this.adult > 0 || this.concession > 0) &&
              // Check if the guidebooks and their numbers match
              !this.nguideerror &&
              // Check if ntickets is within the maximum number of tickets available for session
              this.$store.getters['purchase/getntickets'] <= this.$store.getters['purchase/getmaxtickets'])
    }
  }
}
</script>

<style scoped>
.total {
  text-align: center;
}
</style scoped>
