<template>
<div id="tickets">
  <v-alert error v-bind:value="ntickets > 10 ? true : false">
    Number of tickets cannot be more than 10.
  </v-alert>
  <v-card class="grey lighten-4 elevation-1">
    <v-card-row class="purple darken-4">
      <v-card-title>
        <span class="white--text">Tickets</span>
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card-row>
    <v-card-text class="grey lighten-4 elevation-1">
      <v-container fluid>
        <v-row>
          <v-col xs6 class="text-lg-left">
            <h6>Category</h6>
          </v-col>
          <v-col xs3 class="text-lg-middle">
            <h6># of tickets</h6>
          </v-col>
          <v-col xs3 class="total text-lg-middle">
            <h6>Total (£)</h6>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs6>
            <v-subheader v-text="'Adult tickets'" />
          </v-col>
          <v-col xs3>
            <v-select label="Select" v-bind:items="items" v-model="adult" v-bind:rules="[() => ((adult && adult > 0) || concession > 0) || 'Please select at least one ticket']"  max-height="200" light item-value="number" single-line auto />
          </v-col>
          <v-col xs3 class="text-md-center">
            <p>{{ adultprice }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs6>
            <v-subheader v-text="'Children'" />
          </v-col>
          <v-col xs3>
            <v-select v-bind:items="items" v-model="children" label="Select" max-height="200" light single-line auto />
          </v-col>
          <v-col xs3 class="text-md-center">
            <p>{{ childprice }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs6>
            <v-subheader v-text="'Concession'" />
          </v-col>
          <v-col xs3>
            <v-select label="Select" v-bind:items="items" v-model="concession" v-bind:rules="[() => ((concession && concession > 0) || adult > 0) || 'Please select at least one ticket']" max-height="200" light item-value="number" single-line auto />
          </v-col>
          <v-col xs3 class="text-md-center">
            <p>{{ concessionprice }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs9 class="text-lg-right">
            <h6>Total</h6>
          </v-col>
          <v-col xs3 class="text-lg-center">
            <p><strong>£ {{ total }}</strong></p>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  'name': 'Tickets',
  data () {
    return {
      adult: 0,
      children: 0,
      concession: 0,
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  computed: {
    adultprice () {
      return this.adult * 9
    },
    childprice () {
      return this.children * 5
    },
    concessionprice () {
      return this.concession * 5
    },
    total () {
      return this.adultprice + this.childprice + this.concessionprice
    },
    ntickets () {
      return this.adult + this.children + this.concession
    }
  },
  watch: {
    ntickets () {
      this.$store.dispatch('purchase/setntickets', this.ntickets)
      this.$store.dispatch('purchase/set_ticketvalidation', this.validate())
    }
  },
  methods: {
    validate () {
      return this.$store.getters['purchase/getntickets'] <= 10 && this.$store.getters['purchase/getntickets'] > 0 && (this.adult > 0 || this.concession > 0)
    }
  }
}
</script>

<style scoped>
.total {
  text-align: center;
}
</style scoped>
