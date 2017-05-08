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
            <v-subheader v-text="'Booking reference'"/>
          </v-col>
          <v-col xs6>
            <v-subheader>{{this.$store.getters['purchase/getuuid']}}</v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs6>
            <v-subheader v-text="'Booking date and sessions'"/>
          </v-col>
          <v-col xs6>
            <v-subheader>{{this.$store.getters['purchase/getdate']}} {{this.$store.getters['purchase/getsession']}}</v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs6>
            <v-subheader>Total for {{this.$store.getters['purchase/getntickets']}} tickets and  {{this.$store.getters['purchase/get_nguidebooks']}} guides is:</v-subheader>
          </v-col>
          <v-col xs6>
            <v-subheader> £{{this.$store.getters['purchase/gettotal']}}</v-subheader>
          </v-col>
        </v-row>

      </v-container>
    </v-card-text>
  </v-card>
  <v-card-row class="purple darken-4">
    <v-card-title>
      <span class="white--text">Personal details</span>
      <v-spacer></v-spacer>
    </v-card-title>
  </v-card-row>
  <v-card-text class="grey lighten-4 elevation-1">
    <v-container fluid>
      <v-row>
        <v-col xs6>
          <v-subheader v-text="'Full name'" />
        </v-col>
        <v-col xs6>
          <v-text-field
            label="Full name"
            counter
            v-model="name"
            min="5"
            max="255"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col xs6>
          <v-subheader v-text="'Email address to subscribe to mailing list'" />
        </v-col>
        <v-col xs6>
          <v-text-field
            label="someone@anonymous.com"
            counter
            v-model="email"
            min="5"
            max="255"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col xs6>
          <v-subheader v-text="'Gift aid'" />
        </v-col>
        <v-col xs6>
          <v-radio label="Yes, I pay taxes in the UK. Gift aid this purchase" primary v-model="giftaid" value="true" light />
          <v-radio label="No" primary v-model="giftaid" value="false" light />
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
      name: '',
      email: '',
      giftaid: 'true'
    }
  }
}
</script>
