<template>
<div id="prices">
  <v-snackbar
    :timeout="5000"
    :bottom="true"
    v-model="message"
  >     {{response}}
  <v-btn flat class="pink--text">Close</v-btn>
  </v-snackbar>
  <v-card class="grey lighten-4 elevation-1">
    <v-card-title class="purple darken-4 white--text">
      <h5>Ticket prices</h5>
    </v-card-title>
    <v-card-text class="grey lighten-4 elevation-1">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs9 class="text-lg-left">
            <h6>Category</h6>
          </v-flex>
          <v-flex xs3 class="total text-lg-middle">
            <h6>Price (£)</h6>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs9>
             <v-slider label="Adult price" step="0.5" min="1" max="50" v-model="adultprice" thumb-label></v-slider>
           </v-flex>
           <v-flex xs3>
              <p>{{price.adultprice}}</p>
           </v-flex>
           <v-flex xs9>
              <v-slider label="Child price" v-bind:max="50" v-model="price.childprice"></v-slider>
            </v-flex>
            <v-flex xs3>
              <v-text-field v-model="price.childprice" type="number"></v-text-field>
            </v-flex>
            <v-flex xs9>
               <v-slider label="Concession price" v-bind:max="50" v-model="price.concessionprice"></v-slider>
            </v-flex>
            <v-flex xs3>
              <v-text-field v-model="price.concessionprice" type="number"></v-text-field>
            </v-flex>
            <v-flex xs9>
              <v-slider label="Guide price" v-bind:max="50" v-model="price.guideprice"></v-slider>
            </v-flex>
            <v-flex xs3>
              <v-text-field v-model="price.guideprice" type="number"></v-text-field>
            </v-flex>
          <v-flex xs12>
            <v-btn
              @click.native="update_prices()"
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
  'name': 'Prices',
  data () {
    return {
      message: false,
      response: '',
      adultprice: 0,
      price: {
        adultprice: 0,
        childprice: 0,
        concessionprice: 0,
        guideprice: 0
      }
    }
  },
  created () {
    HTTP.get(`api/v1/prices`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.price = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    update_prices () {
      HTTP.post('config/prices', this.price)
        .then(response => {
          this.response = 'Update successful!'
          this.message = true
          this.$router.push({path: '/config'})
        })
        .catch(e => {
          this.errorbar = true
          this.errors.push(e)
          this.response = 'Update failed!'
          this.message = true
        })
    }
  }
}
</script>
