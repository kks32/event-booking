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
            <v-select label="Select" v-bind:items="items" v-model="adult"
            v-bind:rules="[() => ((adult && adult > 0) || concession > 0) || 'Please select at least one ticket']"
            max-height="200" light item-value="number" single-line auto />
          </v-col>
          <v-col xs3 class="text-md-center">
            <p>{{ adultprice }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs6>
            <v-subheader>Children <span title="Child ticket is for 12 – 17 years and there is no charge for children 11 and under."><v-icon class="pl-2 grey--text text--darken-2">info</v-icon></span>
            </v-subheader>
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
            <v-subheader>Student <span title="The concession ticket is for students with a valid ID card."><v-icon class="pl-2 grey--text text--darken-2">info</v-icon></span>
            </v-subheader>
          </v-col>
          <v-col xs3>
            <v-select label="Select" v-bind:items="items" v-model="concession"
            v-bind:rules="[() => ((concession && concession > 0) || adult > 0) || 'Please select at least one ticket']"
            max-height="200" light item-value="number" single-line auto />
          </v-col>
          <v-col xs3 class="text-md-center">
            <p>{{ concessionprice }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs3>
            <v-subheader v-text="'Guide books'" />
          </v-col>
          <v-col xs3>
            <v-select
              v-model="guides"
              label="Select guidebook languages"
              :items="guidebooks"
              item-text="lang"
              item-value="id"
              v-bind:rules="[() => (guides.length !== 0 || nguidebooks === 0) || 'Please select at least one guide']"
              multiple
              chips
            ></v-select>
          </v-col>
          <v-col xs3>
            <v-select label="Select total copies" v-bind:items="items" v-model="nguidebooks"
              v-bind:rules="[() => (guides.length === 0 || nguidebooks !== 0) || 'Please select at least one guide']"
              max-height="200" light item-value="number" single-line auto />
          </v-col>
          <v-col xs3 class="text-md-center">
            <p>{{ guideprice }}</p>
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
      nguidebooks: 0,
      guides: [],
      guidebooks: [
        {id: 1, lang: 'English'},
        {id: 2, lang: 'French'},
        {id: 3, lang: 'Italian'},
        {id: 4, lang: 'Mandarin'},
        {id: 5, lang: 'Korean'},
        {id: 6, lang: 'Japanese'}
      ],
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  computed: {
    adultprice () {
      return this.adult * 9
    },
    childprice () {
      return this.children * 6
    },
    concessionprice () {
      return this.concession * 6
    },
    guideprice () {
      return this.nguidebooks * 3.50
    },
    total () {
      return this.adultprice + this.childprice + this.concessionprice + this.guideprice
    },
    ntickets () {
      return this.adult + this.children + this.concession
    }
  },
  watch: {
    total () {
      this.$store.dispatch('purchase/setntickets', this.ntickets)
      this.$store.dispatch('purchase/set_nguidebooks', this.nguidebooks)
      this.$store.dispatch('purchase/settotal', this.total)
      this.$store.dispatch('purchase/set_ticketvalidation', this.validate())
    },
    ntickets () {
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
