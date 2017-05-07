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
          <v-col xs6>
            <strong><v-subheader v-text="'Category'" /></strong>
          </v-col>
          <v-col xs3>
            <v-subheader v-text="'# of tickets'" />
          </v-col>
          <v-col xs3 class="text-md-center">
            <v-subheader v-text="'Total (£)'" />
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
          <v-col xs9>
            <h4>Total</h4>
          </v-col>
          <v-col xs3 class="text-lg-center">
            <p><strong>{{ total }}</strong></p>
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
      if (this.ntickets > 9) {
        alert('Number of tickets should be below 10')
      }
      this.$store.dispatch('purchase/setntickets', this.ntickets)
    }
  }
}
</script>

<style scoped>
.tickets {
  z-index: 998
}
</style scoped>
