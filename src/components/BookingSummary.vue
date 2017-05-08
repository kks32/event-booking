<template>
<div id="summary">
  <v-card class="grey lighten-4 elevation-1">
    <v-card-row class="purple darken-4">
      <v-card-title>
        <span class="white--text">Booking summary</span>
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card-row>
    <v-card-text class="grey lighten-4 elevation-1">
      <v-container fluid>
        <v-row>
          <v-col xs6>
            <h6>Booking reference</h6>
          </v-col>
          <v-col xs6>
            <h6>{{this.$store.getters['purchase/getuuid']}}</h6>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs6>
            <h6>Booking date and sessions:</h6>
          </v-col>
          <v-col xs6>
            <h6>{{this.$store.getters['purchase/getdate']}} {{this.$store.getters['purchase/getsession']}}</h6>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs6>
            <h6>Total for {{this.$store.getters['purchase/getntickets']}} tickets and  {{this.$store.getters['purchase/get_nguidebooks']}} guides is:</h6>
          </v-col>
          <v-col xs6>
            <h6> £{{this.$store.getters['purchase/gettotal']}}</h6>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  'name': 'Summary',
  data () {
    return {
      msg: 'Hi'
    }
  }
}
</script>
