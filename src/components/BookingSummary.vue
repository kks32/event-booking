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
          <qr-code :text=qruuid></qr-code>
        </v-row>
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
      <v-row v-if="giftaid==='true'">
        <v-col xs6>
          <v-subheader v-text="'Subscribe'" />
        </v-col>
        <v-col xs6>
          <v-radio class="pb-4" label="We would like to than you for your support and keep you
          informed of news, events and opportunities at King's College. Please tick
          if you wish us to use your aress and email for this purpose." primary v-model="subscribe" value="true" light />
          <v-radio class="pt-4" label="My gift is anonymous - please do not include me in public
          list of donors." primary v-model="subscribe" value="false" light />
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
      giftaid: 'true',
      subscribe: 'true',
      uuid: ''
    }
  },
  computed: {
    qruuid () {
      return this.$store.getters['purchase/getuuid']
    }
  }
}
</script>
